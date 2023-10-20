const heading = React.createElement('div', {"id": "d1"}, [

    React.createElement('div',{id : "d11"}, [
        React.createElement('h1',{},'h1 read'),
        React.createElement('p',{},'p1 read')
    ]),
    React.createElement('div',{id : "d11"}, [
        React.createElement('h1',{},'h1 read'),
        React.createElement('p',{},'p1 read')
    ])
]);




const reactRoot = ReactDOM.createRoot(document.getElementById("root"));

reactRoot.render(heading);