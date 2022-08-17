import React from 'react';
import { BgRightCorner } from './bgUpperCornerStyles';
import { UpperCornerDesktop, UpperCornerMobile } from './upperCornerSvgs';
function BgUpperCorner({ mobile }) {
    return (
        <BgRightCorner mobile={mobile} aria-hidden="true">
            {mobile ? <UpperCornerMobile /> : <UpperCornerDesktop />}
        </BgRightCorner>
    );
}

export default BgUpperCorner;
