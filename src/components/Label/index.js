import { Text } from "react-native";
import styles from "./styles";
export default function Label({
    text,
    type,
    size
}){
    let style = '';
    switch (type) {
        case 'display':
            if(size == 'large'){
                style = styles.display.large;
            }else if(size == 'medium'){
                style = styles.display.medium;
            }else if(size == 'small'){
                style = styles.display.small;
            }
            break;
        case 'underline':
                if(size == 'large'){
                    style = styles.underline.large;
                }else if(size == 'medium'){
                    style = styles.underline.medium;
                }else if(size == 'small'){
                    style = styles.underline.small;
                }
            break;
        case 'title':
                if(size == 'large'){
                    style = styles.title.large;
                }else if(size == 'medium'){
                    style = styles.title.medium;
                }else if(size == 'small'){
                    style = styles.title.small;
                }
            break;
            case 'label':
                if(size == 'large'){
                    style = styles.label.large;
                }else if(size == 'medium'){
                    style = styles.label.medium;
                }else if(size == 'small'){
                    style = styles.label.small;
                }
            break;
            case 'body':
                if(size == 'large'){
                    style = styles.body.large;
                }else if(size == 'medium'){
                    style = styles.body.medium;
                }else if(size == 'small'){
                    style = styles.body.small;
                }
            break;
        default:
            if(size == 'large'){
                style = styles.label.large;
            }else if(size == 'medium'){
                style = styles.label.medium;
            }else if(size == 'small'){
                style = styles.label.small;
            }
            break;
    }

    const selected = style;
    return(
        <Text style={selected}>
            {text}
        </Text>
    );
}
