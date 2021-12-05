import React from "react";
import Text from "components/Text";
import UserList from "components/UserList";
import {usePeopleFetch} from "hooks";
import * as S from "./style";

const Home = () => {
  const { users, isLoading, fetchUsers } = usePeopleFetch();
  return (
    <S.Home >
      <S.Content >
        <S.Header >
          <Text size="64px" bold>
            PplFinder
          </Text>
        </S.Header>
        <Text size="12" bold>
          click mail button to copy email
        </Text>
        <UserList users={users} isLoading={isLoading} fetchUsers={fetchUsers} />
      </S.Content>
    </S.Home>
  );
};

export default Home;
