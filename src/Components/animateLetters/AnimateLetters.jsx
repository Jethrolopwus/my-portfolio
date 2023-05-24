import './AnimateLetters.scss';


const animateLetters = ({letterClass, strarray, index}) =>  {
    return (
        <span>
            {
                strarray.map((char, i) =>
                  ( <span key={char + i} className={`${letterClass} _${i + index}`}>
                        {char}
                    </span>)
            )
            }
        </span>
    )
}
export default animateLetters;