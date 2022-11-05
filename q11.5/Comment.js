// 发布商品详情页--评论
import "../assets/css/Comment.css";
import React, { useState, useEffect } from "react";
import { Button, Input, List } from "antd-mobile";

const Comment = () => {
  const [list, setList] = useState([]);
  const [value, setValue] = useState("");
  const removeTodo = (index) => {
    const todoList = [...list];
    todoList.splice(index, 1);
    setList(todoList);
  };
  const publish = () => {
    setList(list.concat([{ name: value }]));
    setValue("");
  };
  useEffect(() => {
    console.log("list变化了");
    console.log(list);
  }, [list]);
  return (
    <div>
      <list>
        <Input id="commentipt"
          value={value}
          placeholder="请输入评论"
          onChange={(value) => setValue(value)}
        />
      </list>

      <Button type="primary" onClick={() => publish()}>
        评论
      </Button>

      <List>
        <ul>
          {list.map((item, index) => (
            <li key={index}>
              {item.name} <span onClick={() => removeTodo(index)}>删除</span>
            </li>
          ))}
        </ul>
      </List>
    </div>
  );
};

export default Comment;
