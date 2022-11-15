import { StoryCategory } from "@src/core/domain/entity/story/category";

export namespace Story {
  class StoryBase {
    title: string;
    body: string;
    category: StoryCategory;

    protected constructor (props: StoryBase) {
      this.title = props.title;
      this.body = props.body;
      this.category = props.category;
    }
  }

  export class Write extends StoryBase {
    static create = (props: Write) => {
      return new Write(props);
    }
  }

  type ReadProps = StoryBase & {
    id: number;
  }

  export class Read extends StoryBase implements ReadProps {
    static create = (props: ReadProps) => {
      return new Read(props);
    }

    id: number;

    getHeading () {
      return `${this.category}: ${this.title}`;
    }

    // ファクトリから生成する
    protected constructor (props: ReadProps) {
      super(props);
      this.id = props.id;
    }
  }
}



