import styles from '../../../styles/product/TechnicalSpecs.module.scss';

const TechnicalSpecs = () => {
  const specs = [
    { label: 'Sensor type:', value: '24.2MP CMOS' },
    { label: 'Image Procesor:', value: 'DIGIC 8' },
    { label: 'ISQ Range:', value: '100-25600' },
    { label: 'Shutter Speed:', value: '1/4000 a 30 sec' },
  ];

  return (
    <div className={styles.technicalSpecs}>
      <h2 className={styles.title}>Technical Specifications</h2>
      <ul className={styles.specsList}>
        {specs.map((spec, index) => (
          <li key={index} className={styles.specItem}>
            <span className={styles.specLabel}>{spec.label}</span>
            <span className={styles.specValue}>{spec.value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default TechnicalSpecs;