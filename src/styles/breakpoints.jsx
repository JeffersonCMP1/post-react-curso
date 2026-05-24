const sizes={
    mobile:"756px",
    tablet:"768px",
    laptop:"992px",
    desktop:"1200px",
    xd:"1600px",
};

export const Device={
    mobile:`(min-width: ${sizes.mobile})`,
    tablet:`(min-width: ${sizes.tablet})`,
    laptop:`(min-width: ${sizes.laptop})`,
    desktop:`(min-width: ${sizes.desktop})`,
    xd:`(min-width: ${sizes.xd})`
};