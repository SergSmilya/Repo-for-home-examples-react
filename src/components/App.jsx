import ColorPicker from './ColorPicker/ColorPicker';
import Counter from './Counter/Counter';
import Dropdown from './Dropdown/Dropdown';

export const App = () => {
  return (
    <div
    // style={{
    //   height: '100vh',
    //   display: 'flex',
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   fontSize: 40,
    //   color: '#010101'
    // }}
    >
      {/* <Counter /> */}
      {/* <Dropdown /> */}
      <ColorPicker />
    </div>
  );
};
