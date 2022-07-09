import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import { CloseIcon, NewTag, NewTagInput, NewTagText, PlussIcon, TagContainer, Tags } from "../styles/tag.styles";
import { TagProps } from "./tag_types";

const Tag: React.FC<TagProps> = ({style, ...props}: TagProps) => {
    const [tags, setTags] = useState<string[]>(props.defaultTags || []);
    const [inputValue, setInputValue] = useState<string>('');
    const [inputVisible, setInputVisible] = useState<boolean>(false);
    const inputRef = useRef(null);

    useEffect(() => {
        if (inputVisible) {
          inputRef.current?.focus();
        }
    }, [inputVisible]);

    const handleInputaChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
        console.log(tags)
    };

    const CloseTag = (removedTag: any) => {
        const newTags = tags.filter((tag: any) => tag !== removedTag);
        setTags(newTags);
    };

    const handleInputaConfirm = (e: ChangeEvent<HTMLInputElement>) => {
        setInputVisible(false);
        if(inputValue !== ""){
        setTags([...tags, inputValue]);
        setInputValue('');
        e.target.value = '';
        }
    };

    const newTag = <NewTag {...props} onClick={() => setInputVisible(true)}><PlussIcon/><NewTagText>new tag</NewTagText></NewTag>

    return (
        <TagContainer>
            {tags.map((tag: string, index: number) => {
                return (
                    <Tags key={index} {...props} fontSize={props.fontSize} style={style}>
                        <div>{tag}</div>
                        {props.closable && <CloseIcon onClick={() => CloseTag(tag)}/>}
                    </Tags>
                )
            })}
            {inputVisible &&
                <NewTagInput type={'text'} ref={inputRef} onChange={handleInputaChange} onBlur={handleInputaConfirm} {...props}></NewTagInput>
            }
            {!inputVisible && newTag}
        </TagContainer>
    )
}

export default Tag;