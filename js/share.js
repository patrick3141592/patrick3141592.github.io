const shareURL = 'https://patrick3141592.github.io/'

function kakaoShare()
    {   const shareTitle = '리연시: 리오 연애 시뮬레이션';
        const shareDes = '나는 리오와 연애할 수 있을까?';
        const shareImg = 'https://patrick3141592.github.io/img/인사리오.png';

        Kakao.Share.sendCustom({
            templateId: 106358,
            templateArgs: {
              title: shareTitle,
              description: shareDes,
            },
          });
    }

