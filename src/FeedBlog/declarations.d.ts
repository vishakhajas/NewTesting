declare module "*.png" {
    const value: string;
    export default value;
}
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.gif";
declare module "*.svg";

declare module "*.module.css" {
    const classes: { [key: string]: string };
    export default classes;
}
declare module "*.module.scss";
declare module "*.module.sass";
declare module "*.module.less";

