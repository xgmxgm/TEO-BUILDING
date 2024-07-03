'use client'

import styles from './Certificates.module.scss'
import { motion } from "framer-motion"
import { Images } from '../data'
import Image from 'next/image'

export const Certificates = () => {
	const pVariants = {
        hidden: {
			x: 100,
            opacity: 0,
        },
        visible: (custom: number) => ({
			x: 0,
            opacity: 1,
			transition: {delay: custom * 0.2},
        }),
    }

	return (
		<>
			<motion.div
				className={styles.Certificates}
				initial='hidden'
				whileInView='visible'
				viewport={{once: true}}
			>
				<div className={styles.Content}>
					<div className={styles.Title}>
						<h2 className={styles.TitleText}>Сертификаты</h2>
					</div>
					<div className={styles.CertificatesBlock}>
						{
							Images.map((img, index) => <motion.div key={index} variants={pVariants} custom={index}><Image className={styles.Img} src={img.href} alt='Certificate'  width={550} height={800} style={{maxWidth: '100%', height: 'auto'}} priority/></motion.div>)
						}
					</div>
				</div>
			</motion.div>
		</>
	)
}