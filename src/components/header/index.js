import React, { useState } from 'react';

import 'src/assets/scss/header.scss';
import baccarat from 'src/components/header/baccarat.jpg';
import slotmachine from 'src/components/header/slotmachine.jpg';

const Header = () => {
	function handleActive(id) {
		if ($(`#${id} .nav-collapse`).css('display') === 'block') {
			$(`.nav-collapse`).css('display', 'none');
		} else {
			$(`.nav-collapse`).css('display', 'none');
			$(`#${id} .nav-collapse`).css('display', 'block');
		}
	}

	return (
		<div id='header-container'>
			<div id='header-logo'>
				<img src='' alt='header-logo' />
			</div>
			<div id='nav-bar'>
				<div id='money'>
					<span>1.000.000</span>
					<i className='fa-solid fa-coins'></i>
				</div>
				<div id='games' onClick={() => handleActive('games')} className='nav-item'>
					<span>Games</span>
					<div className='nav-collapse'>
						<div id='games-baccarat' className='game'>
							<a href='#' alt='baccarat'>
								Baccarat
							</a>
							<img src={baccarat} alt='game background' />
						</div>
						<div id='games-slot-machine' className='game'>
							<a href='#' alt='slot machine'>
								777 Slot machine
							</a>
							<img src={slotmachine} alt='game background' />
						</div>
					</div>
				</div>
				<div id='news' onClick={() => handleActive('news')} className='nav-item'>
					News
				</div>
				<div id='shop' onClick={() => handleActive('shop')} className='nav-item'>
					<span>Shop</span>
					<div className='nav-collapse'>
						<div className='shop-collapse'>
							<a href='#' alt='accessories'>
								<span>Accessories</span>
							</a>
						</div>
						<div className='shop-collapse'>
							<a href='#' alt='clothes'>
								<span>Clothes</span>
							</a>
						</div>
						<div className='shop-collapse'>
							<a href='#' alt='gift card'>
								<span>Gift card</span>
							</a>
						</div>
					</div>
				</div>
				<div id='contact' className='nav-item'>
					Contact
				</div>
				<div id='account' onClick={() => handleActive('account')} className='nav-item'>
					<span>Account</span>
					<div className='nav-collapse'>
						<div className='account-collapse'>
							<a href='#' alt='order'>
								<span>Orders</span> <i className='icon fa-solid fa-truck'></i>
							</a>
						</div>
						<div className='account-collapse'>
							<a href='#' alt='Mission'>
								<span>Mission</span> <i className='icon fa-solid fa-gift'></i>
							</a>
						</div>
						<div className='account-collapse'>
							<a href='#' alt='add fund'>
								<span>Add fund</span> <i className='icon fa-solid fa-wallet'></i>
							</a>
						</div>
						<div className='account-collapse'>
							<a href='#' alt='setting'>
								<span>Setting</span> <i className='icon fa-solid fa-gears'></i>
							</a>
						</div>
						<div className='account-collapse'>
							<a href='#' alt='logout'>
								<span>Logout</span> <i className='icon fa-solid fa-right-from-bracket'></i>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
