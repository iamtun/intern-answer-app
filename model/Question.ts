export interface Question {
  id: string;
  title: string;
  user_info: {
    display_name: string;
  };
  vote_count: number;
  answer_count: number;
  view_count: number;
  create_time: number;
}
