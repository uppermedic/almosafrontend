import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Markdown from 'markdown-to-jsx';
import { withTranslation } from 'root/i18n';

const ReadMore = ({ open, toggle, item, language, t }) => {
  return (
    <div className="read-more-modal">
      <Modal
        isOpen={open}
        toggle={() => toggle(false)}
        unmountOnClose={true}
        centered={true}
        className="readmore"
      >
        <ModalHeader toggle={() => toggle(false)}>
          {(language && item[language]['title']) || ''}
        </ModalHeader>
        <ModalBody>
          <Markdown>{language ? item[language]?.content : ''}</Markdown>
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={() => toggle(false)}>
            {t('close')}
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default withTranslation('common')(ReadMore);
