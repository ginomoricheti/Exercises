// src/components/Header.tsx
import { AppBar, Toolbar, Typography, Tab, Button } from '@mui/material'
import { NavbarWrapper } from '../styles/Styles.modules'
import { brown } from '@mui/material/colors'
import { NavLink } from 'react-router-dom'

const menuItems = [
  { name: "Home", link:'/'},
  { name: "Releases", link:'now_playing' },
  { name: "Popular", link:'popular' },
  { name: "Movies", link:'movies' },
  { name: "TV Shows", link:'tv_shows' },
]


const Header = () => {
  return (
    <>
      <NavbarWrapper>

        <AppBar sx={{ backgroundColor: 'rgb(38, 33, 37)' }}>

          <Toolbar className='p-[10px]'>
            <Typography className='logoText'>Filmfreaks</Typography>

            <div className='navLinks'>
              {menuItems.map((nav, index) => (
                <NavLink to={nav.link} key={index}>
                  <Tab className='links' label={nav.name}/>
                </NavLink>
              ))}
            </div>

            <Button
              className='loginBtn'
              variant='contained'
              color='info'
              size='large'
              sx={{
                bgcolor: brown[500],
                borderColor: brown[500],
                color: brown[200],
                fontWeight: '700',
                '&:hover': { bgcolor: brown[200], color: brown[500] }
              }}
            >Login</Button>
          </Toolbar>

        </AppBar>

      </NavbarWrapper>
    </>
  )
}

export default Header