import React from 'react';
import '../css/style.css';


class Splash extends React.Component {
	render(){
		return(

				<div>
				<div class="top-header"> 
  <div class="item-1">
<t class="logo">StrangerThings</t>
    <div class="slogan">
<h3>You don't have to go out alone anymore. </h3>
<h3>There's strangers everywhere.
  </h3>
      </div>
  </div>
  <div class="item-1">
  <img class="image-1 b-s" src="https://hypb.imgix.net/image/2018/03/stranger-things-season-3-maya-thurman-hawke-cast-1.jpg?q=80&w=2400&fit=max&auto=compress%2Cformat"/>
  </div>
</div>

<div class="content">
  <div class="container">
    <div class="item-1 content-padding">
  <h1 class="t-right coming-soon">Coming soon...</h1>
      <div class="app t-center">
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/cd/Get_it_on_Google_play.svg"/>
        <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"/>
        </div>
      </div>
        <div class="item-1">
      </div>
  </div>
</div>

<div class="footer">
  CMPE 195 SJSU 2018
</div>
				</div>

			);
	}
}

ReactDOM.render(
  <Splash/>,
  document.getElementById('root')
);