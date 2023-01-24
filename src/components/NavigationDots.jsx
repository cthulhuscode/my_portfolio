export const NavigationDots = ({active}) => {
  return (
    <div className='app__navigation'>
      {['home', 'skills','projects','experience', 'contact'].map((item, index) => (                      
        <a 
          className='app__navigation-dot'
          key={item + index}
          href={`#${item}`}
          style={active === item ? {backgroundColor: '#313BAC'} : {}}
        />        
      ))}
    </div>
  )
}
