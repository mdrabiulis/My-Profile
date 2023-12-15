import { useTypewriter, Cursor } from "react-simple-typewriter";



const Home = () => {
  const [text] = useTypewriter({
    words: ["Front and Backend", "Developer"],
    loop: 1,
    delaySpeed:'1500',
    
  });
  return (
    <div className="">
      <h1 className="text-center text-3xl font-bold mt-64">MD RABIUL ISLAM</h1>
      <div className="App text-center">
        <p className="text-xl">Hi, I am   <span>  {text}</span><Cursor cursorColor="red" /></p>
        
      </div>
    </div>
  );
};

export default Home;
