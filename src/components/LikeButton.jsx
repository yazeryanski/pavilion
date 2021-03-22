const sBtn = {
    backgroundColor:    '#3161EA',
    color:              '#fff',
    display:            'inline-flex',
    alignItems:         'center',
    textDecoration:     'none',
    padding:            '7px 19px',
    borderRadius:       '50px',
}

const sIcon = {
    marginRight:        '5px'
}

export default function LikeButton() {
    return (
        <a href="#like" style={sBtn}>
            <i className="fas fa-thumbs-up" style={sIcon}></i>
            <span>Like</span>
        </a>
    );
}
