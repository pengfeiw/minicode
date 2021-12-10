export interface LayoutPage extends React.FC {
    getLayout?: (page: JSX.Element) => JSX.Element;
}
