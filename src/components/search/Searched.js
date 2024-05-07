function Searched(props){
    const searchText = props.searchText;

    // function searchItem(item){
    //     if(item.title == props.searchItem){
    //         return true
    //     }
    // }

    return(
        <div>
            <h1>민지의 목록쑈</h1>
            <p>{props.searchItem}</p>
        </div>
    )
}

export default Searched 