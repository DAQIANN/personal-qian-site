'use client'

import React, { useEffect, useRef, useState } from 'react';

import './Link.css';

import useMouse from '@react-hook/mouse-position';
import { LinkType } from './types';

const Y_PADDING = 20;
const X_PADDING = 10;

const removeHttpFromUrl = (link: string) => link.split('//')[1];

type Props = {
    children: React.ReactNode;
    cssID?: string;
    href?: string;
    linkType?: LinkType;
};

export default function Link({
    children,
    cssID,
    href,
    linkType,
}: Props): React.ReactElement {
    const placeholderElement = typeof document !== "undefined" ? document.createElement("a") : undefined;
    const tooltipRef = useRef<HTMLAnchorElement>(placeholderElement!);

    const mouse = useMouse(tooltipRef as unknown as React.RefObject<HTMLElement>, {
        enterDelay: 0,
        leaveDelay: 0,
    });

    const linkRef = useRef<HTMLAnchorElement>(null);
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const getPosition = () => {
        if (linkRef?.current == null) {
            return;
        }

        setX(linkRef.current.offsetLeft);
        setY(linkRef.current.offsetTop);
    };

    useEffect(() => {
        getPosition();
        window.addEventListener('mouseover', getPosition);
    }, []);

    if (href == null) {
        return <strong id={cssID}>{children}</strong>;
    }

    return (
        <a
            ref={tooltipRef}
            className="link"
            href={href}
            id={cssID}
            rel="noopener noreferrer"
            target="_blank"
        >
            {linkType === LinkType.STRING ? (
                <strong ref={linkRef}>{children}</strong>
            ) : (
                <span ref={linkRef}>{children}</span>
            )}
            <span
                className="tooltip"
                style={{
                    left: (mouse.x ?? 0) + x + X_PADDING + 'px',
                    top: (mouse.y ?? 0) + y + Y_PADDING + 'px',
                }}
            >
                {removeHttpFromUrl(href)}&#x2197;
            </span>
        </a>
    );
}