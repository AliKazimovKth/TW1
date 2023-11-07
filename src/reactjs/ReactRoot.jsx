import Summary from "./summaryPresenter.jsx";

export default
function ReactRoot(props){
    return (<div>
                {}
                <div><Summary model={props.model} /></div>
            </div>
           );
}
// )
