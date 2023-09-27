import { Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeftIcon } from '@chakra-ui/icons';

function BackHome() {
  const navigate = useNavigate();
  const navigateBack = () => {
    if (document.startViewTransition) {
      const transition = document.startViewTransition(() => {
        navigate('/');
      });

      transition.ready.then(() => {
        document.documentElement.animate(
          {
            transform: ['translateY(0%)', 'translateY(100%)'],
            zIndex: [1, 1],
          },
          {
            duration: 800,
            easing: 'ease-out',
            pseudoElement: '::view-transition-old(root)',
          }
        );
      });
    } else {
      navigate('/');
    }
  };
  return (
    <Button onClick={navigateBack} mb={10} className="back-button">
      <ChevronLeftIcon boxSize={10} /> Go Home
    </Button>
  );
}

export default BackHome;
