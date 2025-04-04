let chatClient;

function startChat() {
    if (!chatClient) {
        chatClient =
        new CozeWebSDK.WebChatClient({
            /**
            * Agent configuration information.
            * @param config.bot_iad - Agent ID.
            */
            config: {
              bot_id: '7487831935281397768',
            },
            componentProps: {
              title: 'Nguyên Hà Food',
            },
            /**
            * The auth property is used to configure the authentication method.
            * @param type - Authentication method, default type is 'unauth', which means no authentication is required; it is recommended to set it to 'token', which means authentication is done through PAT (Personal Access Token) or OAuth.
            * @param token - When the type is set to 'token', you need to configure the PAT (Personal Access Token) or OAuth access key.
            * @param onRefreshToken - When the access key expires, a new key can be set as needed.
            */
           
            /**
            * The userInfo parameter is used to set the display of agent user information in the chat box.
            * @param userInfo.id - ID of the agent user.
            * @param userInfo.url - URL address of the user's avatar.
            * @param userInfo.nickname - Nickname of the agent user.
            */
            userInfo: { 
              id: 'user', 
              url: 'https://cdn-icons-png.flaticon.com/512/7891/7891470.png', 
              nickname: 'Khách hàng', 
            }, 
            ui: { 
              base: { 
                icon: 'https://cdn2.hubspot.net/hub/7482566/hubfs/KingMeat_logo.png?width=108&height=108', 
                lang: 'vi',
              },
              chatBot: {
                title: 'Nguyên Hà Food',
                uploadable: false,
              }, 
              /**
              * Controls whether to display the floating ball at the bottom right corner of the page.
              */
              asstBtn: { 
                isNeed: true, 
              }, 
              footer: {
                  isShow: false,
                  
              }
          },
          });
    }
}

// Khởi động chat bot ngay khi trang được tải
window.onload = startChat; 