import styles from './Image.module.scss';
import classNames from 'classnames';
import { forwardRef, useState } from 'react';
import images from '~/assets/images';

const Image = forwardRef(({ src, alt, fallback, className, ...props }, ref) => {
    const [_fallback, setFallback] = useState('');
    const handleError = () => setFallback(fallback ? fallback : images.noImage);

    return (
        <img
            className={classNames(styles.wrapper, className)}
            ref={ref}
            src={_fallback || src}
            alt={alt}
            {...props}
            onError={handleError}
        />
    );
});

export default Image;
