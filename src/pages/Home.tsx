import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const navigateToComment = (ejercicio: number) => {
    if (document.startViewTransition) {
      const transition = document.startViewTransition(() => {
        ejercicio == 1 ? navigate(`/Ejercicio1`) : navigate(`/Ejercicio2`);
      });

      transition.ready.then(() => {
        document.documentElement.animate(
          [
            { transform: 'translateY(100%)' },
            { transform: 'translateY(66%)' },
            { transform: 'translateY(33%)' },
            { transform: 'translateY(0px)' },
            { transform: 'translateY(10px)' },
            { transform: 'translateY(0px)' },
            { transform: 'translateY(5px)' },
            { transform: 'translateY(0)' },
          ],
          {
            duration: 800,
            easing: 'ease-in',
            pseudoElement: '::view-transition-new(root)',
          }
        );
      });
    } else {
      ejercicio == 1 ? navigate(`/Ejercicio1`) : navigate(`/Ejercicio2`);
    }
  };
  return (
    <main className='home-container'>
      <button className='home-button' onClick={() => navigateToComment(1)}>Ejercicio1</button>
      <button className='home-button' onClick={() => navigateToComment(2)}>Ejercicio2</button>
    </main>
  );
}

export default Home;
