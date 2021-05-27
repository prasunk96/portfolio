import React, { useState } from 'react';
import styles from './styles.module.css';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export const FooterForm = () => {
    const [name, setName] = useState('');
    const [contact, setContact] = useState('');
    const [description, setDescrption] = useState('');

    return (
        <div className={styles.footerFormContainer}>
            <div className={styles.footerFormHeader}>
                <label>Ping Me</label>
            </div>
            <div className={styles.formInputContainer}>
                <div className={styles.footerFormName}>
                    <Input name='Name' type="text" placeholder='Name' onChange={setName} value={name}/>
                </div>
                <div className={styles.footerFormContact}>
                    <Input name='Contact' type="text" placeholder='Contact' onChange={setContact} value={contact} />
                </div>
                <div className={styles.footerFormDescription}>
                    <textarea className={styles.footerFormTextarea} name="Descrption" type="text" placeholder="Have something to explain..." onChange={(e) => setDescrption(e.target.value)} value={description} />
                </div>
                <div className={styles.footerFormButton}>
                    <Button icon={'send'} label={'Send'} />
                </div>
            </div>
        </div>
    )
}