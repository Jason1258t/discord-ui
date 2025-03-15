import styles from './DmNavigation.module.css'
import TextField from '../../../../../../../components/text/textfield'

import addMember from './src/user-plus.svg';
import members from './src/users.svg';
import voicecall from './src/phone.svg';
import videocall from './src/video-camera.svg';

const DmNavigation = ({}) => {
    return (
        <div className={styles.wrapper}>
            <img src={voicecall} />
            <img src={videocall} />
            <img src={addMember} /> 
            <img src={members} />
            <div className={styles.search}>
                <TextField
                    type='text'
                    placeholder={'Поиск'}
                />
                {/* <img src={search} /> */}
            </div>
        </div>
    )
}

export default DmNavigation;