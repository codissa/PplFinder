import React from "react";
import Text from "components/Text";
import FavoriteUserList from "../../components/FavoriteUserList";
import * as S from "./style";

const Favorites = () => {

  return (
    <S.Home>
      <S.Content>
        <S.Header>
          <Text size="64px" bold>
            favorite people
          </Text>

        </S.Header>
        <Text size="12" bold>
          click mail icon to copy to clipboard
        </Text>
        <FavoriteUserList users={JSON.parse(localStorage.getItem('favoriteUsers'))} isLoading={false} />
      </S.Content>
    </S.Home>
  );
};

export default Favorites;