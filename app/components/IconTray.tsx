'use client'
import React from 'react';
import "./Icons.css";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';

type Props = {
    iconSize:
    | 'xs'
    | 'lg'
    | 'sm'
    | '1x'
    | '2x'
    | '3x'
    | '4x'
    | '5x'
    | '6x'
    | '7x'
    | '8x'
    | '9x'
    | '10x';
    darkMode: boolean;
};

export const IconTray = ({ iconSize, darkMode }: Props): React.ReactElement => {
    const iconClassName = classNames(
        { 'social-icon-dark': !darkMode },
        { 'social-icon-light': darkMode }
    );

    library.add(
        faEnvelope, // Solid icon
        faFileAlt,  // Solid icon
        faGithub,   // Brand icon
        faLinkedin  // Brand icon
    );

    return (
        <div className="social-icons">
            <a href="mailto:danielqian2015@gmail.com">
                <FontAwesomeIcon
                    icon="envelope"
                    className={iconClassName}
                    size={iconSize}
                />
            </a>
            <a
                href="https://github.com/DAQIANN"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FontAwesomeIcon
                    icon={['fab', 'github']}
                    id="github"
                    className={iconClassName}
                    size={iconSize}
                />
            </a>
            <a
                href="https://www.linkedin.com/in/danielqian5/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FontAwesomeIcon
                    icon={['fab', 'linkedin']}
                    id="linkedin"
                    className={iconClassName}
                    size={iconSize}
                />
            </a>
            <a
                href="./"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FontAwesomeIcon
                    icon="file-alt"
                    className={iconClassName}
                    size={iconSize}
                />
            </a>
        </div>
    );
};