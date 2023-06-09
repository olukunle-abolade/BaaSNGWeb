import { COLORS, FONTS, SIZES } from '@/assets';
import styled from 'styled-components';

export const TopNavWrapper = styled.div`
    padding: 0 30px ;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #F7F7F7;
    position:fixed;
    width: calc(100% - ${SIZES.sidebar} - 0.5rem);
    height: 80px;
    
    .left_Topnav {
      display: flex;
      align-items: center;

      .search{
        position: relative;
        
        input[type="text"]{
          border: none;
          outline: none;
          padding: 1.1rem 0 1.1rem 2.8rem;
          width: 233px;
          border-radius: 30px;
          color: ${COLORS.secondary};
          font-size: ${SIZES.body5};

          ::placeholder,
          ::-webkit-input-placeholder {
            color: #757575;
            letter-spacing: 0.03em;
          }
        }

        .topnav_search{
          position: absolute;
          color: black;
          left: 1rem;
          top: 21px;
          color: #757575;
        }
      }

      .dropdown_select{
        padding: 1.5rem;
        background: transparent;
        width: 200px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 1.6rem;
        cursor: pointer;

        .select, .dropdown_icon{
            color: ${COLORS.kgrey};
        }
        .select{
            font-weight: 400;
            font-size: ${SIZES.body5};
        }

        .dropdown_icon{
            font-size: 18px;
        }
      }
    }

`;

export const TopnavUser = styled.div`
    display: flex;
    align-items: center;
  }

  .dropdown_icon {
    color: ${COLORS.kgrey};
  }
`;
export const TopNavNotificationItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 15px;
  cursor: pointer;

  &:hover {
    background: #fafafb;
  }

  i {
    margin-right: 20px;
    font-size: 1rem;
  }
`;
