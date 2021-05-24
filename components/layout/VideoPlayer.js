import React from 'react';
import { connect } from 'react-redux';
import { toggleMediaPlayer as toggleMediaPlayerAction } from 'src/store/actions';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import ReactPlayer from 'react-player';
import { withTranslation } from 'root/i18n';

const VideoPlayer = ({ media_player, toggleMediaPlayer, t }) => {
  const toggle = () => {
    //close
    toggleMediaPlayer(false);
  };
  return (
    <div>
      <Modal
        isOpen={media_player.isOpen}
        toggle={toggle}
        unmountOnClose={true}
        size="lg"
        centered={true}
      >
        <ModalHeader toggle={toggle}>{media_player.title}</ModalHeader>
        <ModalBody>
          <ReactPlayer
            url={media_player.url}
            width="100%"
            height="100%"
            controls={true}
          />
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={toggle}>
            {t('close')}
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};
const mapStateToProps = state => ({
  media_player: state.Layout.media_player
});

const mapDispatchToProps = {
  toggleMediaPlayer: toggleMediaPlayerAction
};

export default withTranslation('common')(
  connect(mapStateToProps, mapDispatchToProps)(VideoPlayer)
);
