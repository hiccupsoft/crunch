import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import MenuItem from '@mui/material/MenuItem'
import logo from '../../logo.svg'
import day from '../../assets/day.svg'
import { useNavigate } from 'react-router-dom'
import './navbar.css'
// import { Link } from 'react-scroll';

const pages = [
  { label: 'Products', path: '#product' },
  { label: 'About', path: '#about' },
  { label: 'News', path: '#news' },
  { label: 'Roadmap', path: '#roadmap' },
  // { label: 'Team', path: '#team' },
]
const settings = ['Profile', 'Account', 'Dashboard', 'Logout']

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null,
  )
  let navigate = useNavigate()

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  return (
    <AppBar
      className="nav-main"
      position="absolute"
      sx={{ backgroundColor: '#5767AF', paddingTop: '30px', width: '100%' }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
             <button onClick={() => {navigate("/")}}
            >
              <img
                src={logo}
                className="cursor-pointer App-logo text-white w-20 sm:w-auto"
                alt="logo"
              />
            </button>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page, ind) => (
                <MenuItem
                  key={ind + 1}
                  onClick={handleCloseNavMenu}
                  sx={{ margin: '1rem auto' }}
                >
                  <Typography textAlign="center">
                    <a href={page.path} className="mob-item rounded-full px-14">
                      {page.label}
                    </a>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            <button onClick={() => {navigate("/")}}
            >
              <img
                src={logo}
                className="cursor-pointer App-logo text-white w-20 sm:w-auto"
                alt="logo"
              />
            </button>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}></Box>
          <Box
            className="nav1-web-menus"
            sx={{
              flexGrow: -7,
              display: { xs: 'none', md: 'flex', rowGap: '20px' },
            }}
          >
            {pages.map((page, ind) => (
              <Typography
                key={ind + 1}
                component="div"
                className="cursor-pointer"
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  mx: 1,
                  color: 'white',
                  display: 'block',
                  fontWeight: '300',
                  fontSize: '15px',
                }}
              >
                <a href={page.path} className="item rounded-full px-5 py-1">
                  {page.label}
                </a>
              </Typography>
            ))}
          </Box>

          <Box
            sx={{
              width: '25%',
              justifyContent: 'center',
              display: { xs: 'none', lg: 'flex' },
            }}
          >
            <div
              style={{ backgroundColor: '#636669' }}
              className="p-1 rounded-full"
            >
              <img
                src={day}
                className="text-white App-logo text-sm"
                alt="logo"
              />
            </div>
          </Box>

          {/* <Box sx={{ flexGrow: 0 }}>
            <button
              onClick={() => {
                navigate('/landing-page2')
              }}
              className="px-4 rounded-full"
              style={{
                fontFamily: 'Mulish',
                fontStyle: 'normal',
                fontWeight: '400',
                fontSize: '18px',
                lineHeight: '23px',
                color: '#031B87',
                border: '1px solid #031B87',
              }}
            >
              App
            </button>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default Navbar
