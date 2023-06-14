import React from 'react';
import { Portal, Button } from '@chakra-ui/react';

function MyPortalComponent() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(!isOpen)}>Toggle Portal</Button>
      {isOpen && (
        <Portal>
          <div
            style={{
              position: 'fixed',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              background: 'white',
              padding: '2rem',
              borderRadius: '0.5rem',
              boxShadow: '0 0.5rem 1rem rgba(0, 0, 0, 0.1)',
            }}
          >
            <p>This is a portal component!</p>
          </div>
        </Portal>
      )}
    </>
  );
}

export default MyPortalComponent;
