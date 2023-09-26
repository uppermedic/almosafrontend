import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Markdown from 'markdown-to-jsx';
import { useTranslation } from 'next-i18next';

const ReadMore = ({ open, toggle, item, language }) => {
const { t } = useTranslation('common');

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
export default ReadMore;
