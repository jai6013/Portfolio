import React, { useContext } from 'react';
import { ThemeContext } from '../../ContextProvider/ThemeContext';
import styles from './Experiences.module.css';

const Experiences = () => {
	const { newTheme } = useContext(ThemeContext);
	return (
		<div className={styles.experiences}>
			<h1
				style={{ color: `${newTheme.title}` }}
				className={styles.heading}
			>
				Experience
			</h1>
			<div className={styles.borderBottom} />

			<div className={styles.container}>
				<div className={styles.position}>
					Design Engineer | Mechanical Engineer{' '}
				</div>
				<div className={styles.date}>Feb 2020 - Jan 2021</div>
				<fieldset className={styles.responsibilites}>
					<legend>
						<h3> Roles & responsibilites </h3>
					</legend>
					<ul>
						<li>
						Used computer aided design software like AutoCAD and SolidWorks to develop designs



						</li>
						<li>
						Developed and designed processes and provided visual aids to assist new employees with the implementation of new processes.
						</li>
						<li>
						Facilitated and executed offsite rework program during major assemblies
						</li>
						
						<li>
						Wrote technical reports from material inspection to product dispatch
						</li>
					</ul>
				</fieldset>
			</div>
		</div>
	);
};

export default Experiences;
