import { animate } from 'framer-motion';
import React, { useEffect, useRef } from 'react';

export const Counter = ({ from, to }) => {
    const nodeRef = useRef();

    useEffect(() => {
        const node = nodeRef.current;
        if (node) {
            const controls = animate(from, to, {
                duration: 1,
                onUpdate: (v) => {
                    node.textContent = parseInt(v.toFixed(0)).toLocaleString();
                }
            });

            return () => controls.stop();
        }
    }, [from, to]);

    return <span ref={nodeRef} className="text-6xl font-extrabold text-slate-800" />;
};