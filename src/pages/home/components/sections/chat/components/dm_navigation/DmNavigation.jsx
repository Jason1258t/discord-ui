import './styles.css'
import addmember from './src/addmember.png'
import info from './src/info.png'
import mail from './src/mail.png'
import members from './src/members.png'
import pin from './src/pin.png'
import search from'./src/search.png'
import videocall from './src/videocall.png'
import voicecall from './src/voicecall.png'
import TextField from '../../../../../../../components/text/textfield'

const DmNavigation = ({}) => {
    return (
        <div className="dmnavig">
            <img src={voicecall} />
            <img src={videocall} />
            <img src={pin} />
            <img src={addmember} />
            <img src={members} />
            <div className="search">
                <TextField
                    type='text'
                    placeholder={'Поиск'}
                />
                {/* <img src={search} /> */}
            </div>
            <img src={mail} />
            <img src={info} />
        </div>
    )
}

export default DmNavigation;