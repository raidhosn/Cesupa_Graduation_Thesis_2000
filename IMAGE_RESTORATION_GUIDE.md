# IMAGE RESTORATION GUIDE
## Realidade Virtual Imersiva - Complete Image Placement Map

### CURRENT STATUS
All images are currently MISSING or BROKEN (20-byte placeholder files only).
This guide shows EXACTLY where each image must be restored in the thesis.

---

## INDEX.HTML - Main Page

### Image 1: Cover Image (REQUIRED)
- **File**: `images/fig0.jpg`
- **Location**: Top of page, after header, before thesis info
- **HTML**:
```html
<figure style="text-align: center; margin: 30px 0;">
  <img src="images/fig0.jpg" alt="Ilustração conceitual de Realidade Virtual" style="max-width: 100%; height: auto; border: 1px solid #ccc;">
  <figcaption style="margin-top: 10px; font-style: italic; color: #555;">
    Figura: Representação de experiência imersiva em Realidade Virtual
  </figcaption>
</figure>
```

### Image 2: Email Icon
- **File**: `images/email6.gif`
- **Location**: Contact section at bottom of page
- **HTML**: `<img src="images/email6.gif" alt="Email" width="84" height="51">`

---

## CAPÍTULO 2 - O QUE É REALIDADE VIRTUAL (capitulo2.html)

### Section 2.1 - BREVE HISTÓRICO

#### Figura 1: O Sensorama (MISSING - MUST RESTORE)
- **File**: `images/sensorama.jpg` or `images/figura1_sensorama.jpg`
- **Location**: After paragraph mentioning "Morton Heilig criou o 'Sensorama'"
- **Caption**: "Figura 1 – O Sensorama de Morton Heilig (1956)"
- **Description**: Mechanical device with stereoscopic 3D display
- **HTML**:
```html
<figure style="text-align: center; margin: 30px 0;">
  <img src="images/sensorama.jpg" alt="O Sensorama de Morton Heilig, dispositivo mecânico de 1956" style="max-width: 100%; height: auto; border: 1px solid #ddd;">
  <figcaption style="margin-top: 10px; font-style: italic; color: #555;">
    <strong>Figura 1</strong> – O Sensorama de Morton Heilig (1956)
  </figcaption>
</figure>
```

#### Figura 2: Link Trainer (MISSING - MUST RESTORE)
- **File**: `images/link_trainer.jpg`
- **Location**: After paragraph about "Edward Link criou o 'Link Trainer' em 1929"
- **Caption**: "Figura 2 – Link Trainer, o primeiro simulador de voo comercial (1929)"
- **HTML**:
```html
<figure style="text-align: center; margin: 30px 0;">
  <img src="images/link_trainer.jpg" alt="Link Trainer, simulador de voo de 1929" style="max-width: 100%; height: auto; border: 1px solid #ddd;">
  <figcaption style="margin-top: 10px; font-style: italic; color: #555;">
    <strong>Figura 2</strong> – Link Trainer, o primeiro simulador de voo comercial (1929)
  </figcaption>
</figure>
```

#### Figura 3: Sword of Damocles (MISSING - MUST RESTORE)
- **File**: `images/sword_damocles.jpg`
- **Location**: After paragraph about "Ivan Sutherland criou o primeiro HMD em 1968"
- **Caption**: "Figura 3 – Sword of Damocles, o primeiro HMD desenvolvido por Ivan Sutherland (1968)"
- **HTML**:
```html
<figure style="text-align: center; margin: 30px 0;">
  <img src="images/sword_damocles.jpg" alt="Sword of Damocles, primeiro HMD de 1968" style="max-width: 100%; height: auto; border: 1px solid #ddd;">
  <figcaption style="margin-top: 10px; font-style: italic; color: #555;">
    <strong>Figura 3</strong> – Sword of Damocles, o primeiro HMD desenvolvido por Ivan Sutherland (1968)
  </figcaption>
</figure>
```

---

## CAPÍTULO 4 - DISPOSITIVOS PARA REALIDADE VIRTUAL (capitulo4.html)

### Section 4.1.2 - HMD's (Head Mounted Displays)

#### Figura 29: Criança com HMD (MISSING - MUST RESTORE)
- **File**: `images/hmd_child.jpg` or `images/figura29_hmd_child.jpg`
- **Location**: In section 4.1.2, first image showing HMD usage
- **Caption**: "Figura 29 – Criança utilizando Head-Mounted Display"
- **HTML**:
```html
<figure style="text-align: center; margin: 30px 0;">
  <img src="images/hmd_child.jpg" alt="Criança usando capacete de realidade virtual HMD" style="max-width: 100%; height: auto; border: 1px solid #ddd;">
  <figcaption style="margin-top: 10px; font-style: italic; color: #555;">
    <strong>Figura 29</strong> – Criança utilizando Head-Mounted Display
  </figcaption>
</figure>
```

#### Figura 30: HMD com Sensores (MISSING - MUST RESTORE)
- **File**: `images/hmd_sensors.jpg` or `images/figura30_hmd_sensors.jpg`
- **Location**: In section 4.1.2, showing technical HMD with tracking sensors
- **Caption**: "Figura 30 – HMD com múltiplos sensores ópticos de rastreamento"
- **HTML**:
```html
<figure style="text-align: center; margin: 30px 0;">
  <img src="images/hmd_sensors.jpg" alt="HMD com sensores ópticos de rastreamento" style="max-width: 100%; height: auto; border: 1px solid #ddd;">
  <figcaption style="margin-top: 10px; font-style: italic; color: #555;">
    <strong>Figura 30</strong> – HMD com múltiplos sensores ópticos de rastreamento
  </figcaption>
</figure>
```

#### Figura 31: HMD da NASA (MISSING - MUST RESTORE)
- **File**: `images/nasa_hmd.jpg` or `images/figura31_nasa_hmd.jpg`
- **Location**: In section 4.1.2, showing professional/research HMD
- **Caption**: "Figura 31 – HMD desenvolvido pela NASA para o projeto VIEW"
- **HTML**:
```html
<figure style="text-align: center; margin: 30px 0;">
  <img src="images/nasa_hmd.jpg" alt="HMD desenvolvido pela NASA" style="max-width: 100%; height: auto; border: 1px solid #ddd;">
  <figcaption style="margin-top: 10px; font-style: italic; color: #555;">
    <strong>Figura 31</strong> – HMD desenvolvido pela NASA para o projeto VIEW
  </figcaption>
</figure>
```

---

## ACTION ITEMS FOR IMAGE RESTORATION:

1. **Locate Original Images**:
   - Search original thesis document (PDF, Word, etc.)
   - Check Geocities/oocities archives
   - Check Internet Archive Wayback Machine for original URLs

2. **Image Specifications**:
   - Format: JPG or PNG preferred
   - Minimum width: 400px (600-800px optimal)
   - Maximum file size: 500KB per image
   - Quality: High enough for academic presentation

3. **File Naming Convention**:
   - `sensorama.jpg` or `figura1_sensorama.jpg`
   - `link_trainer.jpg` or `figura2_link_trainer.jpg`
   - `sword_damocles.jpg` or `figura3_sword_damocles.jpg`
   - `hmd_child.jpg` or `figura29_hmd_child.jpg`
   - `hmd_sensors.jpg` or `figura30_hmd_sensors.jpg`
   - `nasa_hmd.jpg` or `figura31_nasa_hmd.jpg`

4. **Placement Rules**:
   - Always use `<figure>` + `<figcaption>` semantic HTML
   - Center-align images
   - Add 30px margin top/bottom for breathing room
   - Include descriptive alt text for accessibility
   - Add subtle border (1px solid #ddd) for definition

5. **Update HTML Files**:
   - Insert figure HTML at marked locations
   - Ensure figure numbers are sequential
   - Cross-reference figures in text (e.g., "como mostra a Figura 1")

---

## VERIFICATION CHECKLIST:

- [ ] All 6+ images restored and visible
- [ ] Figure numbers correct and sequential
- [ ] Captions in Portuguese with full descriptions
- [ ] Images appear in correct chapters and sections
- [ ] Alt text provided for accessibility
- [ ] Responsive sizing (max-width: 100%)
- [ ] Professional academic appearance

---

**Last Updated**: 2025-01-18
**Status**: Images currently MISSING - awaiting restoration
