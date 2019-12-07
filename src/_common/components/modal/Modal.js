import PropTypes from 'prop-types';
import React from 'react';
import {
  Modal, TouchableWithoutFeedback
} from 'react-native';

import {
  ViewStyledModal, ViewStyledContent,
  TouchableOpacityStyled, ScrollViewStyled
} from './Modal.styled';

const ModalView = ({
  visible,
  children,
  onRequestClose,
}) => (
  <Modal animationType="slide" onRequestClose={onRequestClose} transparent visible={visible}>
    <ViewStyledModal>
      <TouchableOpacityStyled
        activeOpacity={1}
        onPressOut={onRequestClose}>
        <ScrollViewStyled>
          <TouchableWithoutFeedback>
            <ViewStyledContent>
              {children}
            </ViewStyledContent>
          </TouchableWithoutFeedback>
        </ScrollViewStyled>
      </TouchableOpacityStyled>
    </ViewStyledModal>
  </Modal>
);

ModalView.propTypes = {
  visible: PropTypes.bool,
  children: PropTypes.node,
  onRequestClose: PropTypes.func,
};

ModalView.defaultProps = {
  visible: false,
  children: null,
  onRequestClose: () => {},
};

export default ModalView;
