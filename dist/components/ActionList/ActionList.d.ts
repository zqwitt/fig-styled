/// <reference types="react" />
declare interface ActionListProperties {
    actionRole?: string;
    items?: ActionListItemDescriptor[];
    onActionAnyItem?: () => void;
    sections?: ActionListSection[];
}
declare const ActionList: (props: ActionListProperties) => JSX.Element;
export default ActionList;
