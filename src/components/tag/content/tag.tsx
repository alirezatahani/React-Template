import React, { ChangeEvent, useState } from "react";
import { CloseIcon, NewTag, NewTagInput, NewTagText, PlussIcon, TagContainer, Tags } from "../styles/tag.styles";
import { TagProps } from "./tag_types";

const Tag: React.FC<TagProps> = () => {
    const [tags, setTags] = useState<string[]>([]);
    const [inputValue, setInputValue] = useState<string>('');
    const [inputVisible, setInputVisible] = useState<boolean>(false);

    const HandleInputaChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
        console.log(tags)
    };

    const handleClose = (removedTag: any) => {
        const newTags = tags.filter((tag: any) => tag !== removedTag);
        setTags(newTags);
    };

    const HandleInputaConfirm = (e: ChangeEvent<HTMLInputElement>) => {
        if(inputValue !== ""){
        setTags([...tags, inputValue]);
        setInputValue('');
        e.target.value = '';
        setInputVisible(false)
        }

    };

    const newTag = <NewTag onClick={() => setInputVisible(true)}><PlussIcon/><NewTagText>new tag</NewTagText></NewTag>

    return (
        <TagContainer>
            {tags.map((item: any, index: number) => {
                return (
                    <Tags key={index}>
                        <div>{item}</div>
                        <CloseIcon onClick={() => handleClose(item)}/>
                    </Tags>
                )
            })}
            {inputVisible &&
                <NewTagInput type={'text'} onChange={HandleInputaChange} onBlur={HandleInputaConfirm}></NewTagInput>
            }
            {!inputVisible && newTag}
        </TagContainer>
    )
}

export default Tag;