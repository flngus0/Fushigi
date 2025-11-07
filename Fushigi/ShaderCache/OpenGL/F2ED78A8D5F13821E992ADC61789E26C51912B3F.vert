#version 450 core
#extension GL_ARB_gpu_shader_int64 : enable
#extension GL_ARB_shader_ballot : enable
#extension GL_ARB_shader_group_vote : enable
#extension GL_EXT_shader_image_load_formatted : enable
#extension GL_EXT_texture_shadow_lod : enable
#extension GL_ARB_shader_draw_parameters : enable
#extension GL_ARB_shader_viewport_layer_array : enable
#extension GL_NV_viewport_array2 : enable
#pragma optionNV(fastmath off)

const int undef = 0;

layout (binding = 0, std140) uniform _support_buffer
{
    uint alpha_test;
    uint is_bgra[8];
    precise vec4 viewport_inverse;
    precise vec4 viewport_size;
    int frag_scale_count;
    precise float render_scale[73];
    ivec4 tfe_offset;
    int tfe_vertex_count;
} support_buffer;

layout (binding = 8, std140) uniform _vp_c7
{
    precise vec4 data[4096];
} vp_c7;

layout (binding = 7, std140) uniform _vp_c6
{
    precise vec4 data[4096];
} vp_c6;

layout (binding = 5, std140) uniform _vp_c4
{
    precise vec4 data[4096];
} vp_c4;

layout (binding = 6, std140) uniform _vp_c5
{
    precise vec4 data[4096];
} vp_c5;

layout (binding = 2, std140) uniform _vp_c1
{
    precise vec4 data[4096];
} vp_c1;

layout (binding = 4, std140) uniform _vp_c3
{
    precise vec4 data[4096];
} vp_c3;

layout (location = 0) in vec4 in_attr0;
layout (location = 1) in vec4 in_attr1;
layout (location = 2) in vec4 in_attr2;
layout (location = 8) in vec4 in_attr8;

layout (location = 0) out vec4 out_attr0;
layout (location = 1) out vec4 out_attr1;
layout (location = 2) out vec4 out_attr2;
layout (location = 3) out vec4 out_attr3;
layout (location = 4) out vec4 out_attr4;
layout (location = 5) out vec4 out_attr5;
layout (location = 7) out vec4 out_attr7;
layout (location = 8) out vec4 out_attr8;


void main()
{
    precise float temp_0;
    precise float temp_1;
    precise float temp_2;
    precise float temp_3;
    precise float temp_4;
    precise float temp_5;
    precise float temp_6;
    precise float temp_7;
    precise float temp_8;
    precise float temp_9;
    precise float temp_10;
    precise float temp_11;
    precise float temp_12;
    precise float temp_13;
    precise float temp_14;
    precise float temp_15;
    precise float temp_16;
    precise float temp_17;
    precise float temp_18;
    precise float temp_19;
    precise float temp_20;
    precise float temp_21;
    precise float temp_22;
    precise float temp_23;
    precise float temp_24;
    precise float temp_25;
    precise float temp_26;
    precise float temp_27;
    precise float temp_28;
    precise float temp_29;
    precise float temp_30;
    precise float temp_31;
    precise float temp_32;
    precise float temp_33;
    precise float temp_34;
    precise float temp_35;
    precise float temp_36;
    precise float temp_37;
    precise float temp_38;
    precise float temp_39;
    precise float temp_40;
    precise float temp_41;
    precise float temp_42;
    precise float temp_43;
    precise float temp_44;
    precise float temp_45;
    precise float temp_46;
    precise float temp_47;
    precise float temp_48;
    precise float temp_49;
    precise float temp_50;
    precise float temp_51;
    precise float temp_52;
    precise float temp_53;
    precise float temp_54;
    precise float temp_55;
    precise float temp_56;
    precise float temp_57;
    precise float temp_58;
    precise float temp_59;
    precise float temp_60;
    precise float temp_61;
    precise float temp_62;
    precise float temp_63;
    precise float temp_64;
    precise float temp_65;
    precise float temp_66;
    precise float temp_67;
    precise float temp_68;
    precise float temp_69;
    precise float temp_70;
    precise float temp_71;
    precise float temp_72;
    precise float temp_73;
    precise float temp_74;
    precise float temp_75;
    precise float temp_76;
    precise float temp_77;
    precise float temp_78;
    precise float temp_79;
    precise float temp_80;
    precise float temp_81;
    precise float temp_82;
    precise float temp_83;
    precise float temp_84;
    precise float temp_85;
    precise float temp_86;
    precise float temp_87;
    precise float temp_88;
    precise float temp_89;
    precise float temp_90;
    precise float temp_91;
    precise float temp_92;
    precise float temp_93;
    precise float temp_94;
    precise float temp_95;
    precise float temp_96;
    precise float temp_97;
    precise float temp_98;
    precise float temp_99;
    precise float temp_100;
    precise float temp_101;
    precise float temp_102;
    precise float temp_103;
    precise float temp_104;
    precise float temp_105;
    precise float temp_106;
    precise float temp_107;
    precise float temp_108;
    precise float temp_109;
    precise float temp_110;
    precise float temp_111;
    precise float temp_112;
    precise float temp_113;
    precise float temp_114;
    precise float temp_115;
    precise float temp_116;
    precise float temp_117;
    precise float temp_118;
    int temp_119;
    precise float temp_120;
    precise float temp_121;
    precise float temp_122;
    precise float temp_123;
    precise float temp_124;
    precise float temp_125;
    precise float temp_126;
    precise float temp_127;
    precise float temp_128;
    precise float temp_129;
    precise float temp_130;
    precise float temp_131;
    precise float temp_132;
    precise float temp_133;
    precise float temp_134;
    precise float temp_135;
    precise float temp_136;
    precise float temp_137;
    int temp_138;
    precise float temp_139;
    precise float temp_140;
    int temp_141;
    uint temp_142;
    uint temp_143;
    int temp_144;
    precise float temp_145;
    precise float temp_146;
    int temp_147;
    uint temp_148;
    uint temp_149;
    int temp_150;
    precise float temp_151;
    precise float temp_152;
    precise float temp_153;
    precise float temp_154;
    precise float temp_155;
    precise float temp_156;
    precise float temp_157;
    int temp_158;
    uint temp_159;
    uint temp_160;
    int temp_161;
    precise float temp_162;
    int temp_163;
    uint temp_164;
    int temp_165;
    precise float temp_166;
    precise float temp_167;
    int temp_168;
    uint temp_169;
    uint temp_170;
    int temp_171;
    precise float temp_172;
    int temp_173;
    uint temp_174;
    int temp_175;
    precise float temp_176;
    precise float temp_177;
    precise float temp_178;
    precise float temp_179;
    precise float temp_180;
    precise float temp_181;
    precise float temp_182;
    precise float temp_183;
    precise float temp_184;
    precise float temp_185;
    precise float temp_186;
    precise float temp_187;
    precise float temp_188;
    precise float temp_189;
    precise float temp_190;
    precise float temp_191;
    precise float temp_192;
    precise float temp_193;
    precise float temp_194;
    precise float temp_195;
    precise float temp_196;
    precise float temp_197;
    precise float temp_198;
    precise float temp_199;
    precise float temp_200;
    precise float temp_201;
    precise float temp_202;
    precise float temp_203;
    precise float temp_204;
    precise float temp_205;
    precise float temp_206;
    precise float temp_207;
    precise float temp_208;
    precise float temp_209;
    precise float temp_210;
    precise float temp_211;
    precise float temp_212;
    precise float temp_213;
    precise float temp_214;
    precise float temp_215;
    precise float temp_216;
    precise float temp_217;
    precise float temp_218;
    precise float temp_219;
    precise float temp_220;
    precise float temp_221;
    precise float temp_222;
    precise float temp_223;
    precise float temp_224;
    precise float temp_225;
    precise float temp_226;
    precise float temp_227;
    precise float temp_228;
    precise float temp_229;
    precise float temp_230;
    precise float temp_231;
    precise float temp_232;
    precise float temp_233;
    precise float temp_234;
    precise float temp_235;
    precise float temp_236;
    precise float temp_237;
    precise float temp_238;
    precise float temp_239;
    precise float temp_240;
    precise float temp_241;
    precise float temp_242;
    precise float temp_243;
    precise float temp_244;
    precise float temp_245;
    precise float temp_246;
    precise float temp_247;
    precise float temp_248;
    precise float temp_249;
    precise float temp_250;
    precise float temp_251;
    precise float temp_252;
    precise float temp_253;
    precise float temp_254;
    precise float temp_255;
    precise float temp_256;
    precise float temp_257;
    precise float temp_258;
    precise float temp_259;
    precise float temp_260;
    precise float temp_261;
    precise float temp_262;
    precise float temp_263;
    precise float temp_264;
    precise float temp_265;
    precise float temp_266;
    precise float temp_267;
    precise float temp_268;
    precise float temp_269;
    precise float temp_270;
    precise float temp_271;
    precise float temp_272;
    precise float temp_273;
    precise float temp_274;
    precise float temp_275;
    precise float temp_276;
    precise float temp_277;
    precise float temp_278;
    precise float temp_279;
    precise float temp_280;
    gl_Position.x = 0.0;
    gl_Position.y = 0.0;
    gl_Position.z = 0.0;
    gl_Position.w = 1.0;
    // 0x000008: 0x4C9807980CC70000 Mov
    // 0x000010: 0xEFD87F800807FF02 Ald
    temp_0 = in_attr0.x;
    // 0x000018: 0x4C9807980CD70003 Mov
    // 0x000028: 0xEFD87F800847FF07 Ald
    temp_1 = in_attr0.y;
    // 0x000030: 0x4C9807980CE70013 Mov
    // 0x000038: 0xEFD87F800887FF01 Ald
    temp_2 = in_attr0.z;
    // 0x000048: 0x4C6810180CC70000 Fmul
    temp_3 = vp_c6.data[51].x * vp_c6.data[51].x;
    // 0x000050: 0xEFD87F801047FF0D Ald
    temp_4 = in_attr8.y;
    // 0x000058: 0x4C98079C2307000E Mov
    // 0x000068: 0xEFD87F800A47FF18 Ald
    temp_5 = in_attr2.y;
    // 0x000070: 0x4C9807940037001A Mov
    // 0x000078: 0x49A000180CD70300 Ffma
    temp_6 = fma(vp_c6.data[51].y, vp_c6.data[51].y, temp_3);
    // 0x000088: 0x49A000180CE71313 Ffma
    temp_7 = fma(vp_c6.data[51].z, vp_c6.data[51].z, temp_6);
    // 0x000090: 0x4C68101000470206 Fmul
    temp_8 = temp_0 * vp_c4.data[1].x;
    // 0x000098: 0x5080000000571313 Mufu
    temp_9 = inversesqrt(temp_7);
    // 0x0000A8: 0x4C68101000070209 Fmul
    temp_10 = temp_0 * vp_c4.data[0].x;
    // 0x0000B0: 0x4C68101000870208 Fmul
    temp_11 = temp_0 * vp_c4.data[2].x;
    // 0x0000B8: 0x49A0031000570700 Ffma
    temp_12 = fma(temp_1, vp_c4.data[1].y, temp_8);
    // 0x0000C8: 0x49A0049000170704 Ffma
    temp_13 = fma(temp_1, vp_c4.data[0].y, temp_10);
    // 0x0000D0: 0x49A0041000970703 Ffma
    temp_14 = fma(temp_1, vp_c4.data[2].y, temp_11);
    // 0x0000D8: 0x49A004100097FF08 Ffma
    temp_15 = fma(0.0, vp_c4.data[2].y, temp_11);
    // 0x0000E8: 0x49A003100057FF06 Ffma
    temp_16 = fma(0.0, vp_c4.data[1].y, temp_8);
    // 0x0000F0: 0x5C5910000077FF07 Fadd
    temp_17 = -0.0 + temp_1;
    // 0x0000F8: 0x49A0001000670100 Ffma
    temp_18 = fma(temp_2, vp_c4.data[1].z, temp_12);
    // 0x000108: 0x4C6810180CC71312 Fmul
    temp_19 = temp_9 * vp_c6.data[51].x;
    // 0x000110: 0x49A0021000270105 Ffma
    temp_20 = fma(temp_2, vp_c4.data[0].z, temp_13);
    // 0x000118: 0x4C6810180CE71310 Fmul
    temp_21 = temp_9 * vp_c6.data[51].z;
    // 0x000128: 0x49A0031000670106 Ffma
    temp_22 = fma(temp_2, vp_c4.data[1].z, temp_16);
    // 0x000130: 0x4C6810180CD71313 Fmul
    temp_23 = temp_9 * vp_c6.data[51].y;
    // 0x000138: 0x4C58101000770004 Fadd
    temp_24 = temp_18 + vp_c4.data[1].w;
    // 0x000148: 0x49A109180CF7120A Ffma
    temp_25 = 0.0 - vp_c6.data[51].w;
    temp_26 = fma(temp_19, temp_25, temp_19);
    // 0x000150: 0x49A0019000A70100 Ffma
    temp_27 = fma(temp_2, vp_c4.data[2].z, temp_14);
    // 0x000158: 0x4C58101000370505 Fadd
    temp_28 = temp_20 + vp_c4.data[0].w;
    // 0x000168: 0x49A108180CF71003 Ffma
    temp_29 = 0.0 - vp_c6.data[51].w;
    temp_30 = fma(temp_21, temp_29, temp_21);
    // 0x000170: 0x4C58101000770611 Fadd
    temp_31 = temp_22 + vp_c4.data[1].w;
    // 0x000178: 0x4C6810140967040B Fmul
    temp_32 = temp_24 * vp_c5.data[37].z;
    // 0x000188: 0x1E23DCCCCCD70A0A Fmul32i
    temp_33 = temp_26 * 0.100000001;
    // 0x000190: 0x4C58101000B70000 Fadd
    temp_34 = temp_27 + vp_c4.data[2].w;
    // 0x000198: 0x1E23DCCCCCD70303 Fmul32i
    temp_35 = temp_30 * 0.100000001;
    // 0x0001A8: 0x5C58300001170406 Fadd
    temp_36 = 0.0 - temp_31;
    temp_37 = temp_24 + temp_36;
    // 0x0001B0: 0x59A1058000A7050A Ffma
    temp_38 = 0.0 - temp_33;
    temp_39 = fma(temp_28, temp_38, temp_32);
    // 0x0001B8: 0x59A005000037000B Ffma
    temp_40 = fma(temp_34, temp_35, temp_39);
    // 0x0001C8: 0x49A004900017FF0A Ffma
    temp_41 = fma(0.0, vp_c4.data[0].y, temp_10);
    // 0x0001D0: 0x49A0041000A70103 Ffma
    temp_42 = fma(temp_2, vp_c4.data[2].z, temp_15);
    // 0x0001D8: 0x32A005BF00070E0E Ffma
    temp_43 = fma(vp_c7.data[140].x, 0.5, temp_40);
    // 0x0001E8: 0x49A005100027010A Ffma
    temp_44 = fma(temp_2, vp_c4.data[0].z, temp_41);
    // 0x0001F0: 0x4C58101000B70303 Fadd
    temp_45 = temp_42 + vp_c4.data[2].w;
    // 0x0001F8: 0x5C90000000E70016 Rro
    // 0x000208: 0x4C58101000370A14 Fadd
    temp_46 = temp_44 + vp_c4.data[0].w;
    // 0x000210: 0x5080000000071616 Mufu
    temp_47 = cos(temp_43);
    // 0x000218: 0x5C58300000370009 Fadd
    temp_48 = 0.0 - temp_45;
    temp_49 = temp_34 + temp_48;
    // 0x000228: 0x3868104040070E0A Fmul
    temp_50 = temp_43 * 3.0;
    // 0x000230: 0x38681040A0070E17 Fmul
    temp_51 = temp_43 * 5.0;
    // 0x000238: 0x4C68101409770E0E Fmul
    temp_52 = temp_43 * vp_c5.data[37].w;
    // 0x000248: 0x5C59100000370303 Fadd
    temp_53 = 0.0 - temp_45;
    temp_54 = temp_53 + temp_45;
    // 0x000250: 0x5C58300001470508 Fadd
    temp_55 = 0.0 - temp_46;
    temp_56 = temp_28 + temp_55;
    // 0x000258: 0x59A203000097FF0F Ffma
    temp_57 = 0.0 - temp_37;
    temp_58 = fma(0.0, temp_49, temp_57);
    // 0x000268: 0x5C90000000A7000B Rro
    // 0x000270: 0x5080000000070B0B Mufu
    temp_59 = cos(temp_50);
    // 0x000278: 0x5C58100000370003 Fadd
    temp_60 = temp_34 + temp_54;
    // 0x000288: 0x59A104000097FF0A Ffma
    temp_61 = 0.0 - temp_49;
    temp_62 = fma(0.0, temp_61, temp_56);
    // 0x000290: 0x5C6910000087FF0C Fmul
    temp_63 = 0.0 - temp_56;
    temp_64 = 0.0 * temp_63;
    // 0x000298: 0xEFD87F800A07FF08 Ald
    temp_65 = in_attr2.x;
    // 0x0002A8: 0x5C68100000F71215 Fmul
    temp_66 = temp_19 * temp_58;
    // 0x0002B0: 0xEFD87F800987FF0F Ald
    temp_67 = in_attr1.z;
    // 0x0002B8: 0x5C90000001770009 Rro
    // 0x0002C8: 0x59A006000067FF06 Ffma
    temp_68 = fma(0.0, temp_37, temp_64);
    // 0x0002D0: 0x5080000000070909 Mufu
    temp_69 = cos(temp_51);
    // 0x0002D8: 0x5C90000000E7000C Rro
    // 0x0002E8: 0x5C68100001671616 Fmul
    temp_70 = temp_47 * temp_47;
    // 0x0002F0: 0x5080000000170C0C Mufu
    temp_71 = sin(temp_52);
    // 0x0002F8: 0x59A00A8000A71315 Ffma
    temp_72 = fma(temp_23, temp_62, temp_66);
    // 0x000308: 0xEFD87F800907FF0A Ald
    temp_73 = in_attr1.x;
    // 0x000310: 0x5C5830000027020E Fadd
    temp_74 = 0.0 - temp_0;
    temp_75 = temp_0 + temp_74;
    // 0x000318: 0xEFD87F800947FF02 Ald
    temp_76 = in_attr1.y;
    // 0x000328: 0x5C68100000B71616 Fmul
    temp_77 = temp_70 * temp_59;
    // 0x000330: 0x59A00A800067100B Ffma
    temp_78 = fma(temp_21, temp_68, temp_72);
    // 0x000338: 0x4C9807980CF70017 Mov
    // 0x000348: 0x5C68100000E70E0E Fmul
    temp_79 = temp_75 * temp_75;
    // 0x000350: 0x5C68120000971606 Fmul
    temp_80 = temp_77 * 0.5;
    temp_81 = temp_80 * temp_69;
    // 0x000358: 0x4C98079400270016 Mov
    // 0x000368: 0x1E23DCCCCCD70C15 Fmul32i
    temp_82 = temp_71 * 0.100000001;
    // 0x000370: 0xEFD87F801007FF0C Ald
    temp_83 = in_attr8.x;
    // 0x000378: 0x4C6810100047081D Fmul
    temp_84 = temp_65 * vp_c4.data[1].x;
    // 0x000388: 0x59A0070000770707 Ffma
    temp_85 = fma(temp_17, temp_17, temp_79);
    // 0x000390: 0xEFD87F800A87FF0E Ald
    temp_86 = in_attr2.z;
    // 0x000398: 0x51A00B1400470D09 Ffma
    temp_87 = fma(temp_4, vp_c5.data[0].z, vp_c5.data[1].x);
    // 0x0003A8: 0x59A00A8000670B16 Ffma
    temp_88 = fma(temp_78, temp_81, temp_82);
    // 0x0003B0: 0x5C58300000170115 Fadd
    temp_89 = 0.0 - temp_2;
    temp_90 = temp_2 + temp_89;
    // 0x0003B8: 0x4C68101409571701 Fmul
    temp_91 = vp_c6.data[51].w * vp_c5.data[37].y;
    // 0x0003C8: 0x4C68101000870817 Fmul
    temp_92 = temp_65 * vp_c4.data[2].x;
    // 0x0003D0: 0x4C6810100007080B Fmul
    temp_93 = temp_65 * vp_c4.data[0].x;
    // 0x0003D8: 0x4C68101000070A1B Fmul
    temp_94 = temp_73 * vp_c4.data[0].x;
    // 0x0003E8: 0x4C68101000870A08 Fmul
    temp_95 = temp_73 * vp_c4.data[2].x;
    // 0x0003F0: 0x4C68101000470A19 Fmul
    temp_96 = temp_73 * vp_c4.data[1].x;
    // 0x0003F8: 0x51A00D1400570D0D Ffma
    temp_97 = fma(temp_4, vp_c5.data[0].w, vp_c5.data[1].y);
    // 0x000408: 0x5C6810000167010A Fmul
    temp_98 = temp_91 * temp_88;
    // 0x000410: 0x49A005900017180B Ffma
    temp_99 = fma(temp_5, vp_c4.data[0].y, temp_93);
    // 0x000418: 0x49A00D900017021A Ffma
    temp_100 = fma(temp_76, vp_c4.data[0].y, temp_94);
    // 0x000428: 0x49A0041000970216 Ffma
    temp_101 = fma(temp_76, vp_c4.data[2].y, temp_95);
    // 0x000430: 0x49A00C9000570219 Ffma
    temp_102 = fma(temp_76, vp_c4.data[1].y, temp_96);
    // 0x000438: 0x59A0038001571515 Ffma
    temp_103 = fma(temp_90, temp_90, temp_85);
    // 0x000448: 0x49A00B9000971817 Ffma
    temp_104 = fma(temp_5, vp_c4.data[2].y, temp_92);
    // 0x000450: 0x5080000000871515 Mufu
    temp_105 = sqrt(temp_103);
    // 0x000458: 0x5C90000000A7001B Rro
    // 0x000468: 0x49A00D1000270F02 Ffma
    temp_106 = fma(temp_67, vp_c4.data[0].z, temp_100);
    // 0x000470: 0x5080000000171B07 Mufu
    temp_107 = sin(temp_98);
    // 0x000478: 0x49A0049400070C08 Ffma
    temp_108 = fma(temp_83, vp_c5.data[0].x, temp_87);
    // 0x000488: 0x5080000000071B0A Mufu
    temp_109 = cos(temp_98);
    // 0x000490: 0x49A00E9000571818 Ffma
    temp_110 = fma(temp_5, vp_c4.data[1].y, temp_84);
    // 0x000498: 0x49A0059000270E09 Ffma
    temp_111 = fma(temp_86, vp_c4.data[0].z, temp_99);
    // 0x0004A8: 0x49A00C9000670F0B Ffma
    temp_112 = fma(temp_67, vp_c4.data[1].z, temp_102);
    // 0x0004B0: 0x49A0069400170C0C Ffma
    temp_113 = fma(temp_83, vp_c5.data[0].y, temp_97);
    // 0x0004B8: 0x5C6810000027021A Fmul
    temp_114 = temp_106 * temp_106;
    // 0x0004C8: 0x49A00B1000A70F0F Ffma
    temp_115 = fma(temp_67, vp_c4.data[2].z, temp_101);
    // 0x0004D0: 0x49A00B9000A70E0D Ffma
    temp_116 = fma(temp_86, vp_c4.data[2].z, temp_104);
    // 0x0004D8: 0x49A00C1000670E0E Ffma
    temp_117 = fma(temp_86, vp_c4.data[1].z, temp_110);
    // 0x0004E8: 0x4CB0119002371A18 F2i
    temp_118 = trunc(vp_c4.data[8].w);
    temp_119 = int(temp_118);
    // 0x0004F0: 0x5C68100001571017 Fmul
    temp_120 = temp_21 * temp_105;
    // 0x0004F8: 0x59A00D0000B70B1A Ffma
    temp_121 = fma(temp_112, temp_112, temp_114);
    // 0x000508: 0x5C6910000077111B Fmul
    temp_122 = 0.0 - temp_107;
    temp_123 = temp_31 * temp_122;
    // 0x000510: 0x5C68100000A7111D Fmul
    temp_124 = temp_31 * temp_109;
    // 0x000518: 0x5C68100000970919 Fmul
    temp_125 = temp_111 * temp_111;
    // 0x000528: 0x5C68100001571316 Fmul
    temp_126 = temp_23 * temp_105;
    // 0x000530: 0x5C68100001571213 Fmul
    temp_127 = temp_19 * temp_105;
    // 0x000538: 0x59A00D0000F70F10 Ffma
    temp_128 = fma(temp_115, temp_115, temp_121);
    // 0x000548: 0x59A30D8000A7141B Ffma
    temp_129 = 0.0 - temp_109;
    temp_130 = 0.0 - temp_123;
    temp_131 = fma(temp_46, temp_129, temp_130);
    // 0x000550: 0x5080000000571010 Mufu
    temp_132 = inversesqrt(temp_128);
    // 0x000558: 0x59A30E8000771412 Ffma
    temp_133 = 0.0 - temp_107;
    temp_134 = 0.0 - temp_124;
    temp_135 = fma(temp_46, temp_133, temp_134);
    // 0x000568: 0x59A00C8000E70E1A Ffma
    temp_136 = fma(temp_117, temp_117, temp_125);
    // 0x000570: 0x5C68100001670115 Fmul
    temp_137 = temp_91 * temp_126;
    // 0x000578: 0x3848000000471818 Shl
    temp_138 = temp_119 << 4;
    // 0x000588: 0x5C68100001770117 Fmul
    temp_139 = temp_91 * temp_120;
    // 0x000590: 0x5C58100001B71419 Fadd
    temp_140 = temp_46 + temp_131;
    // 0x000598: 0xEF94007048871814 Ldc
    temp_141 = temp_138 + 0x488;
    temp_142 = uint(temp_141) >> 2;
    temp_143 = temp_142 >> 2;
    temp_144 = int(temp_142) & 3;
    temp_145 = vp_c7.data[int(temp_143)][temp_144];
    // 0x0005A8: 0x5C5810000127111B Fadd
    temp_146 = temp_31 + temp_135;
    // 0x0005B0: 0xEF94007068871812 Ldc
    temp_147 = temp_138 + 0x688;
    temp_148 = uint(temp_147) >> 2;
    temp_149 = temp_148 >> 2;
    temp_150 = int(temp_148) & 3;
    temp_151 = vp_c7.data[int(temp_149)][temp_150];
    // 0x0005B8: 0x59A00D0000D70D1C Ffma
    temp_152 = fma(temp_116, temp_116, temp_136);
    // 0x0005C8: 0x5C68100001370111 Fmul
    temp_153 = temp_91 * temp_127;
    // 0x0005D0: 0x5080000000571C13 Mufu
    temp_154 = inversesqrt(temp_152);
    // 0x0005D8: 0x59A001800047FF1A Ffma
    temp_155 = fma(0.0, temp_24, temp_60);
    // 0x0005E8: 0x59A00C800007FF16 Ffma
    temp_156 = fma(0.0, temp_34, temp_140);
    // 0x0005F0: 0x59A00D800007FF1B Ffma
    temp_157 = fma(0.0, temp_34, temp_146);
    // 0x0005F8: 0xEF95007048071800 Ldc
    temp_158 = temp_138 + 0x480;
    temp_159 = uint(temp_158) >> 2;
    temp_160 = temp_159 >> 2;
    temp_161 = int(temp_159) & 3;
    temp_162 = vp_c7.data[int(temp_160)][temp_161];
    temp_163 = int(temp_159) + 1;
    temp_164 = uint(temp_163) >> 2;
    temp_165 = temp_163 & 3;
    temp_166 = vp_c7.data[int(temp_164)][temp_165];
    // 0x000608: 0x5C68100001070219 Fmul
    temp_167 = temp_106 * temp_132;
    // 0x000610: 0xEF95007068071802 Ldc
    temp_168 = temp_138 + 0x680;
    temp_169 = uint(temp_168) >> 2;
    temp_170 = temp_169 >> 2;
    temp_171 = int(temp_169) & 3;
    temp_172 = vp_c7.data[int(temp_170)][temp_171];
    temp_173 = int(temp_169) + 1;
    temp_174 = uint(temp_173) >> 2;
    temp_175 = temp_173 & 3;
    temp_176 = vp_c7.data[int(temp_174)][temp_175];
    // 0x000618: 0x5C68100001070B0B Fmul
    temp_177 = temp_112 * temp_132;
    // 0x000628: 0x5C68100001070F0F Fmul
    temp_178 = temp_115 * temp_132;
    // 0x000630: 0xEFD87F800AC7FF10 Ald
    temp_179 = in_attr2.w;
    // 0x000638: 0x59A10D000057FF1A Ffma
    temp_180 = 0.0 - temp_28;
    temp_181 = fma(0.0, temp_180, temp_155);
    // 0x000648: 0xEFF07F800D07FF08 Ast
    out_attr5.x = temp_108;
    // 0x000650: 0x59A10B000077041C Ffma
    temp_182 = 0.0 - temp_107;
    temp_183 = fma(temp_24, temp_182, temp_156);
    // 0x000658: 0xEFF07F800D47FF0C Ast
    out_attr5.y = temp_113;
    // 0x000668: 0x59A00D8000A70416 Ffma
    temp_184 = fma(temp_24, temp_109, temp_157);
    // 0x000670: 0xEFF07F800847FF0B Ast
    out_attr0.y = temp_177;
    // 0x000678: 0x5C68100001770617 Fmul
    temp_185 = temp_81 * temp_139;
    // 0x000688: 0xEFF07F800887FF0F Ast
    out_attr0.z = temp_178;
    // 0x000690: 0x5C68100001370E0E Fmul
    temp_186 = temp_117 * temp_154;
    // 0x000698: 0xEFF07F800807FF19 Ast
    out_attr0.x = temp_167;
    // 0x0006A8: 0x5C68100001170611 Fmul
    temp_187 = temp_81 * temp_153;
    // 0x0006B0: 0xEFF07F800947FF0E Ast
    out_attr1.y = temp_186;
    // 0x0006B8: 0x59A00E0000A7051C Ffma
    temp_188 = fma(temp_28, temp_109, temp_183);
    // 0x0006C8: 0x5C68100001370D04 Fmul
    temp_189 = temp_116 * temp_154;
    // 0x0006D0: 0x5C68100001370909 Fmul
    temp_190 = temp_111 * temp_154;
    // 0x0006D8: 0xEFF07F800987FF04 Ast
    out_attr1.z = temp_189;
    // 0x0006E8: 0x5C68100001570615 Fmul
    temp_191 = temp_81 * temp_137;
    // 0x0006F0: 0xEFF07F800907FF09 Ast
    out_attr1.x = temp_190;
    // 0x0006F8: 0x49A00D0400071717 Ffma
    temp_192 = fma(temp_185, vp_c1.data[0].x, temp_181);
    // 0x000708: 0x59A00B0000770516 Ffma
    temp_193 = fma(temp_28, temp_107, temp_184);
    // 0x000710: 0x5C68100000F70E05 Fmul
    temp_194 = temp_186 * temp_178;
    // 0x000718: 0x49A00E0400071111 Ffma
    temp_195 = fma(temp_187, vp_c1.data[0].x, temp_188);
    // 0x000728: 0x5C68100001970406 Fmul
    temp_196 = temp_189 * temp_167;
    // 0x000730: 0x5C68100000B70907 Fmul
    temp_197 = temp_190 * temp_177;
    // 0x000738: 0x59A0090001471712 Ffma
    temp_198 = fma(temp_192, temp_145, temp_151);
    // 0x000748: 0x49A00B0400071516 Ffma
    temp_199 = fma(temp_191, vp_c1.data[0].x, temp_193);
    // 0x000750: 0x59A2028000B7040A Ffma
    temp_200 = 0.0 - temp_194;
    temp_201 = fma(temp_189, temp_177, temp_200);
    // 0x000758: 0x59A0010000071100 Ffma
    temp_202 = fma(temp_195, temp_162, temp_172);
    // 0x000768: 0x59A2030000F70906 Ffma
    temp_203 = 0.0 - temp_196;
    temp_204 = fma(temp_190, temp_178, temp_203);
    // 0x000770: 0x59A2038001970E07 Ffma
    temp_205 = 0.0 - temp_197;
    temp_206 = fma(temp_186, temp_167, temp_205);
    // 0x000778: 0x4C5810180BA71205 Fadd
    temp_207 = temp_198 + vp_c6.data[46].z;
    // 0x000788: 0x59A0018000171601 Ffma
    temp_208 = fma(temp_199, temp_166, temp_176);
    // 0x000790: 0x5C68100001070A11 Fmul
    temp_209 = temp_201 * temp_179;
    // 0x000798: 0x4C5830180B07000A Fadd
    temp_210 = 0.0 - vp_c6.data[44].x;
    temp_211 = temp_202 + temp_210;
    // 0x0007A8: 0xEFF07F800A07FF11 Ast
    out_attr2.x = temp_209;
    // 0x0007B0: 0x5C68100001070608 Fmul
    temp_212 = temp_204 * temp_179;
    // 0x0007B8: 0x5C68100001070710 Fmul
    temp_213 = temp_206 * temp_179;
    // 0x0007C8: 0xEFF07F800A47FF08 Ast
    out_attr2.y = temp_212;
    // 0x0007D0: 0x4C6810180C670507 Fmul
    temp_214 = temp_207 * vp_c6.data[49].z;
    // 0x0007D8: 0xEFF07F800A87FF10 Ast
    out_attr2.z = temp_213;
    // 0x0007E8: 0x4C6810180C270503 Fmul
    temp_215 = temp_207 * vp_c6.data[48].z;
    // 0x0007F0: 0x4C5810180B970106 Fadd
    temp_216 = temp_208 + vp_c6.data[46].y;
    // 0x0007F8: 0x4C6810180CA70505 Fmul
    temp_217 = temp_207 * vp_c6.data[50].z;
    // 0x000808: 0x4C5830180B17010B Fadd
    temp_218 = 0.0 - vp_c6.data[44].y;
    temp_219 = temp_208 + temp_218;
    // 0x000810: 0x4C68101803870A0C Fmul
    temp_220 = temp_211 * vp_c6.data[14].x;
    // 0x000818: 0x4C68100C0007000A Fmul
    temp_221 = temp_202 * vp_c3.data[0].x;
    // 0x000828: 0x4C68100C00870002 Fmul
    temp_222 = temp_202 * vp_c3.data[2].x;
    // 0x000830: 0x49A003980C570607 Ffma
    temp_223 = fma(temp_216, vp_c6.data[49].y, temp_214);
    // 0x000838: 0x49A001980C170603 Ffma
    temp_224 = fma(temp_216, vp_c6.data[48].y, temp_215);
    // 0x000848: 0x4C68100C0047000F Fmul
    temp_225 = temp_202 * vp_c3.data[1].x;
    // 0x000850: 0x49A002980C970606 Ffma
    temp_226 = fma(temp_216, vp_c6.data[50].y, temp_217);
    // 0x000858: 0x49A0061803970B05 Ffma
    temp_227 = fma(temp_219, vp_c6.data[14].y, temp_220);
    // 0x000868: 0x49A0050C0017010C Ffma
    temp_228 = fma(temp_208, vp_c3.data[0].y, temp_221);
    // 0x000870: 0x4C58101002071209 Fadd
    temp_229 = temp_198 + vp_c4.data[8].x;
    // 0x000878: 0x49A0010C0097010B Ffma
    temp_230 = fma(temp_208, vp_c3.data[2].y, temp_222);
    // 0x000888: 0x49A0078C0057010F Ffma
    temp_231 = fma(temp_208, vp_c3.data[1].y, temp_225);
    // 0x000890: 0x4C5810180B87000D Fadd
    temp_232 = temp_202 + vp_c6.data[46].x;
    // 0x000898: 0x4C58300C0377120E Fadd
    temp_233 = 0.0 - vp_c3.data[13].w;
    temp_234 = temp_198 + temp_233;
    // 0x0008A8: 0x49A0060C0027120A Ffma
    temp_235 = fma(temp_198, vp_c3.data[0].z, temp_228);
    // 0x0008B0: 0xEFF07F800B87FF0E Ast
    out_attr3.z = temp_234;
    // 0x0008B8: 0x49A0060C0027090C Ffma
    temp_236 = fma(temp_229, vp_c3.data[0].z, temp_228);
    // 0x0008C8: 0x49A0058C00A70902 Ffma
    temp_237 = fma(temp_229, vp_c3.data[2].z, temp_230);
    // 0x0008D0: 0x49A0078C00670909 Ffma
    temp_238 = fma(temp_229, vp_c3.data[1].z, temp_231);
    // 0x0008D8: 0x49A0058C00A71204 Ffma
    temp_239 = fma(temp_198, vp_c3.data[2].z, temp_230);
    // 0x0008E8: 0x49A0078C0067120F Ffma
    temp_240 = fma(temp_198, vp_c3.data[1].z, temp_231);
    // 0x0008F0: 0x4C5830180B271212 Fadd
    temp_241 = 0.0 - vp_c6.data[44].z;
    temp_242 = temp_198 + temp_241;
    // 0x0008F8: 0x49A003180C870D06 Ffma
    temp_243 = fma(temp_232, vp_c6.data[50].x, temp_226);
    // 0x000908: 0x49A001980C070D03 Ffma
    temp_244 = fma(temp_232, vp_c6.data[48].x, temp_224);
    // 0x000910: 0x4C58100C00370C0C Fadd
    temp_245 = temp_236 + vp_c3.data[0].w;
    // 0x000918: 0x4C58100C00370A0A Fadd
    temp_246 = temp_235 + vp_c3.data[0].w;
    // 0x000928: 0x4C58300C02F70000 Fadd
    temp_247 = 0.0 - vp_c3.data[11].w;
    temp_248 = temp_202 + temp_247;
    // 0x000930: 0x4C58300C03370108 Fadd
    temp_249 = 0.0 - vp_c3.data[12].w;
    temp_250 = temp_208 + temp_249;
    // 0x000938: 0xEFF07F800B07FF00 Ast
    out_attr3.x = temp_248;
    // 0x000948: 0x49A0029803A71212 Ffma
    temp_251 = fma(temp_242, vp_c6.data[14].z, temp_227);
    // 0x000950: 0xEFF07F800B47FF08 Ast
    out_attr3.y = temp_250;
    // 0x000958: 0x4C6810180BB70301 Fmul
    temp_252 = temp_244 * vp_c6.data[46].w;
    // 0x000968: 0x4C6810180BB70605 Fmul
    temp_253 = temp_243 * vp_c6.data[46].w;
    // 0x000970: 0xEFF07F801007FF01 Ast
    out_attr8.x = temp_252;
    // 0x000978: 0x4C68100C02470C00 Fmul
    temp_254 = temp_245 * vp_c3.data[9].x;
    // 0x000988: 0xEFF07F801087FF05 Ast
    out_attr8.z = temp_253;
    // 0x000990: 0x4C68100C01C70C03 Fmul
    temp_255 = temp_245 * vp_c3.data[7].x;
    // 0x000998: 0x4C68100C02870C06 Fmul
    temp_256 = temp_245 * vp_c3.data[10].x;
    // 0x0009A8: 0x4C58100C00770F0F Fadd
    temp_257 = temp_240 + vp_c3.data[1].w;
    // 0x0009B0: 0x4C68101802C70A0A Fmul
    temp_258 = temp_246 * vp_c6.data[11].x;
    // 0x0009B8: 0x4C58100C00770909 Fadd
    temp_259 = temp_238 + vp_c3.data[1].w;
    // 0x0009C8: 0x4C68100C02070C0C Fmul
    temp_260 = temp_245 * vp_c3.data[8].x;
    // 0x0009D0: 0x4C58100C00B70404 Fadd
    temp_261 = temp_239 + vp_c3.data[2].w;
    // 0x0009D8: 0x4C58100C00B70202 Fadd
    temp_262 = temp_237 + vp_c3.data[2].w;
    // 0x0009E8: 0xEFF07F800C87FF04 Ast
    out_attr4.z = temp_261;
    // 0x0009F0: 0x49A0051802D70F0A Ffma
    temp_263 = fma(temp_257, vp_c6.data[11].y, temp_258);
    // 0x0009F8: 0x49A0000C02570900 Ffma
    temp_264 = fma(temp_259, vp_c3.data[9].y, temp_254);
    // 0x000A08: 0x49A0018C01D70903 Ffma
    temp_265 = fma(temp_259, vp_c3.data[7].y, temp_255);
    // 0x000A10: 0x49A0030C02970901 Ffma
    temp_266 = fma(temp_259, vp_c3.data[10].y, temp_256);
    // 0x000A18: 0x49A0060C0217090C Ffma
    temp_267 = fma(temp_259, vp_c3.data[8].y, temp_260);
    // 0x000A28: 0x49A003980C470D07 Ffma
    temp_268 = fma(temp_232, vp_c6.data[49].x, temp_223);
    // 0x000A30: 0x4C9807980307000B Mov
    // 0x000A38: 0x4C98079803C70008 Mov
    // 0x000A48: 0x49A0051802E7040A Ffma
    temp_269 = fma(temp_261, vp_c6.data[11].z, temp_263);
    // 0x000A50: 0x49A0000C02670200 Ffma
    temp_270 = fma(temp_262, vp_c3.data[9].z, temp_264);
    // 0x000A58: 0x49A0018C01E70203 Ffma
    temp_271 = fma(temp_262, vp_c3.data[7].z, temp_265);
    // 0x000A68: 0x49A0008C02A70201 Ffma
    temp_272 = fma(temp_262, vp_c3.data[10].z, temp_266);
    // 0x000A70: 0x49A0060C0227020C Ffma
    temp_273 = fma(temp_262, vp_c3.data[8].z, temp_267);
    // 0x000A78: 0x4C6810180BB70707 Fmul
    temp_274 = temp_268 * vp_c6.data[46].w;
    // 0x000A88: 0x51A0041803B71212 Ffma
    temp_275 = fma(temp_251, vp_c6.data[15].x, vp_c6.data[14].w);
    // 0x000A90: 0xEFF07F801047FF07 Ast
    out_attr8.y = temp_274;
    // 0x000A98: 0x51A0059802F70A0A Ffma
    temp_276 = fma(temp_269, vp_c6.data[12].x, vp_c6.data[11].w);
    // 0x000AA8: 0xEFF07F800F47FF12 Ast
    out_attr7.y = temp_275;
    // 0x000AB0: 0x4C58100C02770000 Fadd
    temp_277 = temp_270 + vp_c3.data[9].w;
    // 0x000AB8: 0xEFF07F800F07FF0A Ast
    out_attr7.x = temp_276;
    // 0x000AC8: 0x4C58100C01F70303 Fadd
    temp_278 = temp_271 + vp_c3.data[7].w;
    // 0x000AD0: 0xEFF07F800787FF00 Ast
    gl_Position.z = temp_277;
    // 0x000AD8: 0x4C58100C02B70101 Fadd
    temp_279 = temp_272 + vp_c3.data[10].w;
    // 0x000AE8: 0xEFF07F800707FF03 Ast
    gl_Position.x = temp_278;
    // 0x000AF0: 0x4C58100C02370C0C Fadd
    temp_280 = temp_273 + vp_c3.data[8].w;
    // 0x000AF8: 0xEFF07F8007C7FF01 Ast
    gl_Position.w = temp_279;
    // 0x000B08: 0xEFF07F800747FF0C Ast
    gl_Position.y = temp_280;
    // 0x000B10: 0xE30000000007000F Exit
    return;
}
