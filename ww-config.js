export default {
  editor: {
    label: {
      en: 'Dialog',
      fr: 'Modale'
    },
    icon: 'modal',
    customStylePropertiesOrder: [
      'backgroundColor',
      'borderColor',
      'borderRadius',
      'borderWidth'
    ],
    customSettingsPropertiesOrder: [
      'showTrigger',
      'triggerText',
      'title',
      'description',
      'size',
      'showCloseButton',
      'showFooter',
      'showCancelButton',
      'showConfirmButton',
      'cancelText',
      'confirmText',
      'confirmVariant',
      'closeOnBackdropClick',
      'closeOnEscape',
      'closeOnCancel',
      'closeOnConfirm'
    ]
  },
  properties: {
    showTrigger: {
      label: {
        en: 'Show trigger button',
        fr: 'Afficher le bouton déclencheur'
      },
      type: 'OnOff',
      defaultValue: true,
      bindable: true,
      section: 'settings'
    },
    triggerText: {
      label: {
        en: 'Trigger text',
        fr: 'Texte du déclencheur'
      },
      type: 'Text',
      defaultValue: 'Open Dialog',
      bindable: true,
      multiLang: true,
      section: 'settings',
      hidden: content => !content.showTrigger
    },
    title: {
      label: {
        en: 'Title',
        fr: 'Titre'
      },
      type: 'Text',
      defaultValue: 'Dialog Title',
      bindable: true,
      multiLang: true,
      section: 'settings'
    },
    description: {
      label: {
        en: 'Description',
        fr: 'Description'
      },
      type: 'Text',
      bindable: true,
      multiLang: true,
      section: 'settings'
    },
    size: {
      label: {
        en: 'Size',
        fr: 'Taille'
      },
      type: 'TextSelect',
      options: {
        options: [
          { value: 'sm', label: { en: 'Small', fr: 'Petit' } },
          { value: 'md', label: { en: 'Medium', fr: 'Moyen' } },
          { value: 'lg', label: { en: 'Large', fr: 'Grand' } },
          { value: 'xl', label: { en: 'Extra Large', fr: 'Très grand' } },
          { value: 'full', label: { en: 'Full Screen', fr: 'Plein écran' } }
        ]
      },
      defaultValue: 'md',
      bindable: true,
      section: 'settings'
    },
    showCloseButton: {
      label: {
        en: 'Show close button',
        fr: 'Afficher le bouton fermer'
      },
      type: 'OnOff',
      defaultValue: true,
      bindable: true,
      section: 'settings'
    },
    showFooter: {
      label: {
        en: 'Show footer',
        fr: 'Afficher le pied de page'
      },
      type: 'OnOff',
      defaultValue: true,
      bindable: true,
      section: 'settings'
    },
    showCancelButton: {
      label: {
        en: 'Show cancel button',
        fr: 'Afficher le bouton annuler'
      },
      type: 'OnOff',
      defaultValue: true,
      bindable: true,
      section: 'settings',
      hidden: content => !content.showFooter
    },
    showConfirmButton: {
      label: {
        en: 'Show confirm button',
        fr: 'Afficher le bouton confirmer'
      },
      type: 'OnOff',
      defaultValue: true,
      bindable: true,
      section: 'settings',
      hidden: content => !content.showFooter
    },
    cancelText: {
      label: {
        en: 'Cancel text',
        fr: 'Texte annuler'
      },
      type: 'Text',
      defaultValue: 'Cancel',
      bindable: true,
      multiLang: true,
      section: 'settings',
      hidden: content => !content.showFooter || !content.showCancelButton
    },
    confirmText: {
      label: {
        en: 'Confirm text',
        fr: 'Texte confirmer'
      },
      type: 'Text',
      defaultValue: 'Confirm',
      bindable: true,
      multiLang: true,
      section: 'settings',
      hidden: content => !content.showFooter || !content.showConfirmButton
    },
    confirmVariant: {
      label: {
        en: 'Confirm button variant',
        fr: 'Variante du bouton confirmer'
      },
      type: 'TextSelect',
      options: {
        options: [
          { value: 'default', label: { en: 'Default', fr: 'Par défaut' } },
          { value: 'destructive', label: { en: 'Destructive', fr: 'Destructif' } }
        ]
      },
      defaultValue: 'default',
      bindable: true,
      section: 'settings',
      hidden: content => !content.showFooter || !content.showConfirmButton
    },
    closeOnBackdropClick: {
      label: {
        en: 'Close on backdrop click',
        fr: 'Fermer au clic sur l\'arrière-plan'
      },
      type: 'OnOff',
      defaultValue: true,
      bindable: true,
      section: 'settings'
    },
    closeOnEscape: {
      label: {
        en: 'Close on escape key',
        fr: 'Fermer avec la touche échap'
      },
      type: 'OnOff',
      defaultValue: true,
      bindable: true,
      section: 'settings'
    },
    closeOnCancel: {
      label: {
        en: 'Close on cancel',
        fr: 'Fermer à l\'annulation'
      },
      type: 'OnOff',
      defaultValue: true,
      bindable: true,
      section: 'settings'
    },
    closeOnConfirm: {
      label: {
        en: 'Close on confirm',
        fr: 'Fermer à la confirmation'
      },
      type: 'OnOff',
      defaultValue: true,
      bindable: true,
      section: 'settings'
    },
    body: {
      label: {
        en: 'Content',
        fr: 'Contenu'
      },
      type: 'Element',
      section: 'content'
    },
    footer: {
      label: {
        en: 'Custom footer',
        fr: 'Pied de page personnalisé'
      },
      type: 'Element',
      section: 'content'
    },
    triggerClass: {
      label: {
        en: 'Trigger CSS class',
        fr: 'Classe CSS du déclencheur'
      },
      type: 'Text',
      bindable: true,
      section: 'style'
    },
    contentClass: {
      label: {
        en: 'Content CSS class',
        fr: 'Classe CSS du contenu'
      },
      type: 'Text',
      bindable: true,
      section: 'style'
    },
    titleClass: {
      label: {
        en: 'Title CSS class',
        fr: 'Classe CSS du titre'
      },
      type: 'Text',
      bindable: true,
      section: 'style'
    },
    descriptionClass: {
      label: {
        en: 'Description CSS class',
        fr: 'Classe CSS de la description'
      },
      type: 'Text',
      bindable: true,
      section: 'style'
    },
    bodyClass: {
      label: {
        en: 'Body CSS class',
        fr: 'Classe CSS du corps'
      },
      type: 'Text',
      bindable: true,
      section: 'style'
    },
    footerClass: {
      label: {
        en: 'Footer CSS class',
        fr: 'Classe CSS du pied de page'
      },
      type: 'Text',
      bindable: true,
      section: 'style'
    }
  },
  actions: [
    {
      label: {
        en: 'Open dialog',
        fr: 'Ouvrir la modale'
      },
      action: 'open'
    },
    {
      label: {
        en: 'Close dialog',
        fr: 'Fermer la modale'
      },
      action: 'close'
    }
  ],
  triggerEvents: [
    {
      name: 'open',
      label: {
        en: 'On open',
        fr: 'À l\'ouverture'
      }
    },
    {
      name: 'close',
      label: {
        en: 'On close',
        fr: 'À la fermeture'
      }
    },
    {
      name: 'confirm',
      label: {
        en: 'On confirm',
        fr: 'À la confirmation'
      }
    },
    {
      name: 'cancel',
      label: {
        en: 'On cancel',
        fr: 'À l\'annulation'
      }
    }
  ]
} 