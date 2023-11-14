import 'bulma/css/bulma.css';
import './App.css';
import Course from './Course';
import Angular from './images/angular.jpg';
import Boostrap from './images/bootstrap5.png';
import Csharp from './images/ccsharp.png';
import KompleWeb from './images/kompleweb.jpg';

function App() {
  return (
    <div className="App">
<section className="hero is-link">
  <div className="hero-body">
    <p className="title">
      Emre Erken
    </p>
    
  </div>
</section>
 
 

<div className='container'>
<section className='section' >
<div className='columns'>
     <div className='column'>
     <Course image={Angular} title="Angular" description="Lorem ipsum dolor, sit amet consectetur adipisicing 
elit.Lorem ipsum dolor, sit amet consectetur adipisicing elit.
"/>
     </div>
     <div className='column'>
     <Course image={Boostrap}title="Boostrap" description="Lorem ipsum dolor, sit amet consectetur adipisicing 
elit.Lorem ipsum dolor, sit amet consectetur adipisicing elit.
"/>
</div>
<div className='column'>
<Course image={Csharp} title="Komple Web" description="Lorem ipsum dolor, sit amet consectetur adipisicing 
elit.Lorem ipsum dolor, sit amet consectetur adipisicing elit.
"/>
</div>
<div className='column'>
<Course image={KompleWeb} title = "Front End" description="Lorem ipsum dolor, sit amet consectetur adipisicing 
elit.Lorem ipsum dolor, sit amet consectetur adipisicing elit.
"/>
</div>
    
 </div>
</section>



</div>



     
    </div>
    
  );
}

export default App;
