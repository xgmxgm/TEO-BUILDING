import Image from 'next/image'
import styles from './MobileHeader.module.scss'
import { useState } from 'react'
import { Contacts, Navs } from '../../Data'
import Link from 'next/link'

export const MobileHeader = () => {
	const [isOpenBurgerMenu, setIsOpenBurgerMenu] = useState<boolean>(false)

	return (
		<>
			<div className={styles.MobileHeader}>
				<div className={styles.Content}>
					<div className={styles.Logo}>
						<Image
							className={styles.LogoImg}
							src='/teo-logo-sait.jpeg'
							alt='logo'
							width={50}
							height={50}
						/>
					</div>
					<div
						className={styles.BurgerMenuIcon}
						onClick={() => setIsOpenBurgerMenu(!isOpenBurgerMenu)}
						style={isOpenBurgerMenu ? { position: 'fixed', right: '20px' } : {}}
					>
						<div className={styles.Line}></div>
						<div className={styles.Line}></div>
						<div className={styles.Line}></div>
					</div>
					<div
						className={
							isOpenBurgerMenu ? styles.BurgerMenu : styles.BurgerMenuClosed
						}
					>
						<div className={styles.Content}>
							<div className={styles.Navs}>
								{Navs.map((Nav, index) => (
									<Link
										key={index}
										className={styles.Nav}
										href={Nav.href}
										onClick={() => setIsOpenBurgerMenu(false)}
									>
										{Nav.link}
									</Link>
								))}
							</div>
							<div className={styles.Contacts}>
								{Contacts.map((Contact, index) => (
									<div key={index} className={styles.Contact}>
										<Image
											src={Contact.icon}
											alt='icon'
											width={25}
											height={25}
										/>
										<p className={styles.TextContact}>{Contact.title}</p>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
