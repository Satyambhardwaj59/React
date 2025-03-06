// This component is for understanding toast, it is basic format 


import toast, { Toaster } from 'react-hot-toast';

const notify = () => toast('Here is your toast.');

const Notfi = () => {
  return (
    <div>
      <button onClick={notify}>Make me a toast</button>
      <Toaster 
         toastOptions={{
          className: '',
          style: {
            border: '1px solid #713200',
            padding: '16px',
            color: '#FFA500',
            backgroundColor: "pink",
          },
        }}
      />
    </div>
  );
};

export default Notfi;