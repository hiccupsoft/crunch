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
import { NavLink, useNavigate } from 'react-router-dom'
import './navbar.css'
const pages = [
  { label: 'Home', path: '/' },
  { label: 'Lend', path: '/' },
  { label: 'Farm', path: '/' },
  { label: 'Vault', path: '/' },
  { label: 'Swap', path: '/' },
  { label: 'Vote', path: '/' },
]
const settings = ['Profile', 'Account', 'Dashboard', 'Logout']
const Navbar2 = () => {
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
  let accountAddress = ''
  const getAccount = async () => {
    const accounts = await window.ethereum.request({
      method: 'eth_requestAccounts',
    })
    const account = accounts[0]

    return account
  }

  const connectButtonOnClick = () => {
    console.log(window)
    if (
      typeof window !== 'undefined' &&
      typeof window.ethereum !== 'undefined'
    ) {
      getAccount().then((response: any) => {
        accountAddress = response
      })
    } else {
      console.log('error')
    }
  }
  return (
    <AppBar
      className="nav-main"
      position="absolute"
      sx={{
        backgroundColor: '#5767AF',
        width: '100%',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', lg: 'flex' } }}
          >
            <button onClick={() => {navigate("/")}}
            >
              <img
                src={logo}
                className="cursor-pointer text-white App-logo text-sm"
                alt="logo"
              />
            </button>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', lg: 'none' } }}>
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
                display: { xs: 'block', lg: 'none' },
              }}
            >
              {pages.map((page, ind) => (
                <MenuItem
                  key={ind + 1}
                  onClick={handleCloseNavMenu}
                  sx={{ margin: '1rem auto' }}
                >
                  <Typography textAlign="center">
                    <NavLink
                      to={page.path}
                      className="mob-item rounded-full px-14"
                    >
                      {page.label}
                    </NavLink>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', lg: 'none' } }}
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
          <Box sx={{ flexGrow: 1, display: { xs: 'none', lg: 'flex' } }}></Box>
          <Box
            className="web-menus"
            sx={{
              display: { xs: 'none', lg: 'flex', rowGap: '20px' },
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
                <NavLink to={page.path} className="item rounded-full px-5 py-1">
                  {page.label}
                </NavLink>
              </Typography>
            ))}
          </Box>

          <Box
            sx={{
              width: '15%',
              justifyContent: 'center',
              display: { xs: 'none', xl: 'flex' },
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
          <Box
            sx={{
              width: '10%',
              flexGrow: -20,
              display: { xs: 'none', lg: 'flex' },
            }}
          >
            <span className="cursor-pointer text-sm tracking-wider font-thin">
              Polygon
            </span>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <button
              onClick={() => {
                connectButtonOnClick()
              }}
              className=" text-xs sm:text-md px-4 sm:px-8 py-1 sm:py-2 rounded-full"
              style={{
                fontStyle: 'normal',
                fontWeight: '400',
                color: '#F2F2F2',
                border: '2px solid #031B87',
              }}
            >
              Connect wallet
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
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default Navbar2
