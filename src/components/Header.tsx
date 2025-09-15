import React, { useState } from 'react'
import { Search, ShoppingCart, User, Menu, MapPin, Heart, ChevronDown, X,  Home, Tag } from 'lucide-react'
import { useStore } from '../store/useStore'
import { AuthModal } from './AuthModal'
import { CartModal } from './CartModal'
import { NavLink } from 'react-router-dom'

export const Header: React.FC = () => {
  const { cartItems, searchQuery, setSearchQuery, user, signOut } = useStore()
  const [showUserMenu, setShowUserMenu] = useState(false)
  const [showAuthModal, setShowAuthModal] = useState(false)
  const [showCartModal, setShowCartModal] = useState(false)
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signin')

  const cartItemCount = cartItems.reduce((sum, item) => sum + (item.quantity ?? 0), 0)
  const cartTotal = cartItems.reduce((sum, item) => sum + ((item.price ?? 0) * (item.quantity ?? 0)), 0)

  const handleAuthClick = (mode: 'signin' | 'signup') => {
    setAuthMode(mode)
    setShowAuthModal(true)
    setShowUserMenu(false)
  }

  const handleSignOut = async () => {
    await signOut()
    setShowUserMenu(false)
  }

  // Helper component for navigation links
  const NavLinkHelper = ({ to, text, icon }: { to: string, text: string, icon?: React.ReactNode }) => (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center space-x-2 font-semibold transition-colors duration-200 ${
          isActive ? 'text-indigo-600' : 'text-gray-600 hover:text-indigo-600'
        }`
      }
    >
      {icon}
      <span>{text}</span>
    </NavLink>
  )

  return (
    <>
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo and Brand */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">C</span>
                </div>
                <div className="hidden sm:block">
                  <h1 className="text-xl font-bold text-gray-900">goCartAI</h1>
                  <p className="text-xs text-gray-500">Smart Shopping</p>
                </div>
              </div>
              
              {/* Location - Hidden on mobile */}
              <div className="hidden lg:flex items-center space-x-2 text-sm text-gray-600">
                <MapPin className="h-4 w-4" />
                <div>
                  <div className="text-xs text-gray-400">Deliver to</div>
                  <div className="font-medium">Sacramento, 95829</div>
                </div>
              </div>
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-2xl mx-6">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 pr-12 text-gray-900 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-indigo-600 text-white p-2 rounded-lg hover:bg-indigo-700 transition-colors">
                  <Search className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Right Section */}
            <div className="flex items-center space-x-4">
              {/* Mobile Menu Button */}
              <button
                onClick={() => setShowMobileMenu(!showMobileMenu)}
                className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors text-gray-600"
              >
                {showMobileMenu ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>

              {/* Wishlist - Hidden on mobile */}
              <div className="hidden lg:flex items-center space-x-1 text-gray-600 hover:text-indigo-600 transition-colors cursor-pointer">
                <Heart className="h-5 w-5" />
                <span className="text-sm font-medium">Wishlist</span>
              </div>

              {/* Account */}
              <div className="relative">
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="flex items-center space-x-2 text-gray-600 hover:text-indigo-600 transition-colors"
                >
                  <User className="h-5 w-5" />
                  <div className="hidden sm:flex items-center space-x-1">
                    <span className="text-sm font-medium">{user ? 'Account' : 'Sign In'}</span>
                    <ChevronDown className="h-3 w-3" />
                  </div>
                </button>
                
                {showUserMenu && (
                  <div className="absolute right-0 mt-2 w-72 bg-white text-gray-900 rounded-xl shadow-xl border border-gray-200 z-50">
                    <div className="p-6">
                      {user ? (
                        <>
                          <div className="border-b border-gray-200 pb-4 mb-4">
                            <div className="font-semibold text-lg text-gray-900">{user.full_name || 'User'}</div>
                            <div className="text-sm text-gray-500 truncate">{user.email}</div>
                          </div>
                          <div className="space-y-1">
                            <button className="w-full text-left px-3 py-3 hover:bg-gray-50 rounded-lg font-medium text-gray-700">Order History</button>
                            <button className="w-full text-left px-3 py-3 hover:bg-gray-50 rounded-lg font-medium text-gray-700">Account Settings</button>
                            <button className="w-full text-left px-3 py-3 hover:bg-gray-50 rounded-lg font-medium text-gray-700">Wishlist</button>
                            <button className="w-full text-left px-3 py-3 hover:bg-gray-50 rounded-lg font-medium text-gray-700">Support</button>
                            <hr className="my-3" />
                            <button 
                              onClick={handleSignOut}
                              className="w-full text-left px-3 py-3 hover:bg-red-50 rounded-lg text-red-600 font-medium"
                            >
                              Sign Out
                            </button>
                          </div>
                        </>
                      ) : (
                        <div className="space-y-4">
                          <button 
                            onClick={() => handleAuthClick('signin')}
                            className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
                          >
                            Sign In
                          </button>
                          <button 
                            onClick={() => handleAuthClick('signup')}
                            className="w-full border-2 border-indigo-600 text-indigo-600 py-3 px-4 rounded-lg font-semibold hover:bg-indigo-50 transition-colors"
                          >
                            Create Account
                          </button>
                          <div className="text-sm text-gray-600 space-y-2 pt-2">
                            <div className="font-medium">• Order History</div>
                            <div className="font-medium">• Track Orders</div>
                            <div className="font-medium">• Premium Benefits</div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Cart */}
              <button
                onClick={() => setShowCartModal(true)}
                className="relative flex items-center space-x-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
              >
                <div className="relative">
                  <ShoppingCart className="h-5 w-5" />
                  {cartItemCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-emerald-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                      {cartItemCount > 99 ? '99+' : cartItemCount}
                    </span>
                  )}
                </div>
                <div className="hidden sm:block">
                  <div className="text-xs opacity-90">Cart</div>
                  <div className="font-semibold text-sm">${cartTotal.toFixed(2)}</div>
                </div>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {showMobileMenu && (
            <div className="lg:hidden bg-white border-t border-gray-200 py-4">
              <div className="space-y-1">
                <NavLinkHelper to="/" text="Home" icon={<Home className="w-5 h-5" />} />
                <NavLinkHelper to="/deals" text="Deals" icon={<Tag className="w-5 h-5" />} />
                <NavLinkHelper to="/account" text="My Account" icon={<User className="w-5 h-5" />} />
              </div>
            </div>
          )}

          {/* Navigation - Desktop */}
          <nav className="hidden lg:flex items-center space-x-8 py-3 text-sm border-t border-gray-200">
            <div className="flex items-center space-x-2 hover:text-indigo-600 transition-colors cursor-pointer font-medium text-gray-700">
              <Menu className="h-4 w-4" />
              <span>Categories</span>
            </div>
            <a href="#" className="hover:text-indigo-600 transition-colors font-medium text-gray-700">Electronics</a>
            <a href="#" className="hover:text-indigo-600 transition-colors font-medium text-gray-700">Fashion</a>
            <a href="#" className="hover:text-indigo-600 transition-colors font-medium text-gray-700">Home & Garden</a>
            <a href="#" className="hover:text-indigo-600 transition-colors font-medium text-gray-700">Sports</a>
            <a href="#" className="hover:text-indigo-600 transition-colors font-medium text-gray-700">Books</a>
            <a href="#" className="hover:text-indigo-600 transition-colors font-medium text-gray-700">Health</a>
            <a href="#" className="hover:text-indigo-600 transition-colors font-medium text-gray-700">Deals</a>
            <a href="#" className="hover:text-indigo-600 transition-colors font-medium text-gray-700">New Arrivals</a>
          </nav>
        </div>
      </header>

      {/* Modals */}
      {showAuthModal && (
        <AuthModal
          mode={authMode}
          onClose={() => setShowAuthModal(false)}
          onSwitchMode={(mode) => setAuthMode(mode)}
        />
      )}

      {showCartModal && (
        <CartModal onClose={() => setShowCartModal(false)} />
      )}
    </>
  )
}